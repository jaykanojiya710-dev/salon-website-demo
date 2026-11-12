"use client";

import { useState } from "react";
import { WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { bookingServices, brand, timeSlots } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "demo";

const emptyFields: Fields = { name: "", email: "", phone: "", service: "", date: "", time: "", notes: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Enter the name for the appointment.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Enter a valid email address.";
  if (f.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a phone number with at least 10 digits.";
  if (!f.service) e.service = "Choose a service, or pick the free consultation.";
  if (!f.date) {
    e.date = "Pick a preferred date.";
  } else {
    const d = new Date(`${f.date}T12:00:00`);
    const dow = d.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (dow === 0 || dow === 1)
      e.date = "The studio is closed on Sundays and Mondays. Pick a day from Tuesday to Saturday.";
    else if (d < today) e.date = "Pick today or a later date.";
  }
  if (!f.time) e.time = "Pick a preferred time.";
  return e;
}

function fieldError(id: keyof Fields, errors: Errors, touched: Partial<Record<keyof Fields, boolean>>) {
  return touched[id] ? errors[id] : undefined;
}

export function BookingForm() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const now = new Date();
  const todayIso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate()
  ).padStart(2, "0")}`;

  const set = (key: keyof Fields, value: string) => {
    const next = { ...fields, [key]: value };
    setFields(next);
    if (touched[key]) setErrors(validate(next));
  };

  const blur = (key: keyof Fields) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(fields));
  };

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const errs = validate(fields);
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, service: true, date: true, time: true });
    const firstBad = (Object.keys(errs) as (keyof Fields)[]).find((k) => errs[k]);
    if (firstBad) {
      const el = document.getElementById(`booking-${firstBad}`);
      el?.focus();
      return;
    }
    setStatus("demo");
  }

  const err = (key: keyof Fields) => fieldError(key, errors, touched);

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-8">
      <div role={status === "demo" ? "status" : undefined} className="mb-6 rounded-lg border border-border bg-background p-4">
        <p className="body-4">Demo booking form</p>
        <p className="body-6 mt-1 text-muted-foreground">
          This public preview does not send or save booking requests. Submitting only checks the form locally.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="booking-name" className="title-4">
            Full name
          </Label>
          <Input
            id="booking-name"
            name="name"
            autoComplete="name"
            placeholder="Jane Alvarez"
            value={fields.name}
            onChange={(e) => set("name", e.target.value)}
            onBlur={() => blur("name")}
            aria-invalid={Boolean(err("name"))}
            aria-describedby={err("name") ? "booking-name-error" : undefined}
          />
          {err("name") ? (
            <p id="booking-name-error" className="caption-2 fade-in flex items-center gap-2 text-destructive">
              <WarningCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {err("name")}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="booking-email" className="title-4">
            Email
          </Label>
          <Input
            id="booking-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            value={fields.email}
            onChange={(e) => set("email", e.target.value)}
            onBlur={() => blur("email")}
            aria-invalid={Boolean(err("email"))}
            aria-describedby={err("email") ? "booking-email-error" : undefined}
          />
          {err("email") ? (
            <p id="booking-email-error" className="caption-2 fade-in flex items-center gap-2 text-destructive">
              <WarningCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {err("email")}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="booking-phone" className="title-4">
            Phone
          </Label>
          <Input
            id="booking-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(512) 555 0142"
            value={fields.phone}
            onChange={(e) => set("phone", e.target.value)}
            onBlur={() => blur("phone")}
            aria-invalid={Boolean(err("phone"))}
            aria-describedby={err("phone") ? "booking-phone-error" : undefined}
          />
          {err("phone") ? (
            <p id="booking-phone-error" className="caption-2 fade-in flex items-center gap-2 text-destructive">
              <WarningCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {err("phone")}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="booking-service" className="title-4">
            Service
          </Label>
          <Select
            value={fields.service || undefined}
            onValueChange={(v) => set("service", v)}
            onOpenChange={(o) => {
              if (!o) blur("service");
            }}
          >
            <SelectTrigger
              id="booking-service"
              aria-invalid={Boolean(err("service"))}
              aria-describedby={err("service") ? "booking-service-error" : undefined}
              className="w-full"
            >
              <SelectValue placeholder="What are we doing today?" />
            </SelectTrigger>
            <SelectContent className="max-h-72 overflow-y-auto scroll-slim">
              {bookingServices.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {err("service") ? (
            <p id="booking-service-error" className="caption-2 fade-in flex items-center gap-2 text-destructive">
              <WarningCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {err("service")}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="booking-date" className="title-4">
            Preferred date
          </Label>
          <Input
            id="booking-date"
            name="date"
            type="date"
            min={todayIso}
            value={fields.date}
            onChange={(e) => set("date", e.target.value)}
            onBlur={() => blur("date")}
            aria-invalid={Boolean(err("date"))}
            aria-describedby={err("date") ? "booking-date-error" : undefined}
          />
          {err("date") ? (
            <p id="booking-date-error" className="caption-2 fade-in flex items-center gap-2 text-destructive">
              <WarningCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {err("date")}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="booking-time" className="title-4">
            Preferred time
          </Label>
          <Select
            value={fields.time || undefined}
            onValueChange={(v) => set("time", v)}
            onOpenChange={(o) => {
              if (!o) blur("time");
            }}
          >
            <SelectTrigger
              id="booking-time"
              aria-invalid={Boolean(err("time"))}
              aria-describedby={err("time") ? "booking-time-error" : undefined}
              className="w-full"
            >
              <SelectValue placeholder="Pick a window" />
            </SelectTrigger>
            <SelectContent className="max-h-72 overflow-y-auto scroll-slim">
              {timeSlots.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {err("time") ? (
            <p id="booking-time-error" className="caption-2 fade-in flex items-center gap-2 text-destructive">
              <WarningCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {err("time")}
            </p>
          ) : null}
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="booking-notes" className="title-4">
            Anything we should know
          </Label>
          <Textarea
            id="booking-notes"
            name="notes"
            placeholder="Box dye from March, one grey streak, a wedding on the 21st."
            rows={4}
            value={fields.notes}
            onChange={(e) => set("notes", e.target.value)}
          />
          <p className="caption-2 text-muted-foreground">Optional. The stylist reads this before you arrive.</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary btn-lg-size" disabled={status === "sending"}>
          {status === "demo" ? "Preview checked" : "Try demo form"}
        </button>
        <p className="caption-2 text-muted-foreground">
          Or call {brand.phone}, Tuesday to Saturday.
        </p>
      </div>
    </form>
  );
}
