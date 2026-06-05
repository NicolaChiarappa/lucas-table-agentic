"use client";

import { useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { Check, Minus, Plus, AlertCircle, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "41762421754";
const EMAIL_ADDRESS = "lucastablee@gmail.com";
const PHONE_DISPLAY = "+41 76 242 17 54";
const PHONE_HREF = "+41762421754";

type Experience = {
    id: string;
    name: string;
    tagline: string;
    min: number;
    max: number;
    fixed?: number;
};

const EXPERIENCES: Experience[] = [
    { id: "sesto-senso", name: "Il sesto senso", tagline: "Conviviale, fino a otto ospiti", min: 2, max: 8 },
    { id: "cin-cin", name: "Cin Cin", tagline: "Intimo, riservato a due", min: 2, max: 2, fixed: 2 },
    { id: "su-misura", name: "Su misura", tagline: "Disegnata interamente su di voi", min: 2, max: 20 },
];

const OCCASIONS = [
    "Una cena tra amici",
    "Un anniversario",
    "Un compleanno",
    "Una cena romantica",
    "Un evento speciale",
    "Altro",
];

type FieldName = "experience" | "name" | "contact" | "email";
type Errors = Partial<Record<FieldName, string>>;

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const inputClass =
    "w-full rounded-xl border border-ls-line bg-ls-ivory/[0.05] px-4 py-3 text-ls-ivory " +
    "placeholder:text-ls-ivory/45 outline-none transition-colors duration-200 " +
    "hover:bg-ls-ivory/[0.08] focus-visible:border-ls-gold focus-visible:bg-ls-ivory/10";

export function BookingSection() {
    const reduceMotion = useReducedMotion();
    const baseId = useId();

    const [experienceId, setExperienceId] = useState<string | null>(null);
    const [date, setDate] = useState("");
    const [flexible, setFlexible] = useState(false);
    const [guests, setGuests] = useState(4);
    const [zona, setZona] = useState("");
    const [occasion, setOccasion] = useState("");
    const [notes, setNotes] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [errors, setErrors] = useState<Errors>({});
    const [submitted, setSubmitted] = useState(false);
    const [popupBlocked, setPopupBlocked] = useState(false);

    const experience = useMemo(
        () => EXPERIENCES.find((e) => e.id === experienceId) ?? null,
        [experienceId],
    );

    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const experienceRef = useRef<HTMLFieldSetElement>(null);

    const selectExperience = (next: Experience) => {
        setExperienceId(next.id);
        setGuests(next.fixed ?? Math.min(Math.max(guests, next.min), next.max));
        setErrors((prev) => ({ ...prev, experience: undefined }));
    };

    const adjustGuests = (delta: number) => {
        if (!experience) {
            setGuests((g) => Math.min(Math.max(g + delta, 2), 8));
            return;
        }
        if (experience.fixed) return;
        setGuests((g) => Math.min(Math.max(g + delta, experience.min), experience.max));
    };

    const validate = (): Errors => {
        const next: Errors = {};
        if (!experienceId) next.experience = "Scegli l'esperienza che immagini.";
        if (!name.trim()) next.name = "Dimmi come ti chiami.";
        if (!phone.trim() && !email.trim()) next.contact = "Lasciami un recapito: telefono o email.";
        if (email.trim() && !isValidEmail(email)) next.email = "Controlla l'indirizzo email.";
        return next;
    };

    const buildMessage = () => {
        const lines: string[] = ["Ciao Luca! Vorrei richiedere una serata con te.", ""];
        if (experience) lines.push(`Esperienza: ${experience.name}`);
        if (date) {
            const pretty = format(new Date(date), "d MMMM yyyy", { locale: it });
            lines.push(`Data preferita: ${pretty}${flexible ? " (date flessibili)" : ""}`);
        } else if (flexible) {
            lines.push("Data: sono flessibile");
        }
        lines.push(`Ospiti: ${guests}`);
        if (zona.trim()) lines.push(`Dove: ${zona.trim()}`);
        if (occasion) lines.push(`Occasione: ${occasion}`);
        if (notes.trim()) lines.push(`Note: ${notes.trim()}`);
        lines.push("");
        lines.push(`Mi chiamo ${name.trim()}.`);
        if (phone.trim()) lines.push(`Telefono: ${phone.trim()}`);
        if (email.trim()) lines.push(`Email: ${email.trim()}`);
        return lines.join("\n");
    };

    const whatsappUrl = () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    const mailtoUrl = () =>
        `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent("Richiesta serata private chef")}&body=${encodeURIComponent(buildMessage())}`;

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const next = validate();
        setErrors(next);

        if (Object.keys(next).length > 0) {
            if (next.experience) experienceRef.current?.focus();
            else if (next.name) nameRef.current?.focus();
            else if (next.contact) phoneRef.current?.focus();
            else if (next.email) document.getElementById(`${baseId}-email`)?.focus();
            return;
        }

        const opened = window.open(whatsappUrl(), "_blank", "noopener,noreferrer");
        setPopupBlocked(!opened);
        setSubmitted(true);
    };

    const resetForm = () => {
        setSubmitted(false);
        setPopupBlocked(false);
    };

    const reveal = reduceMotion
        ? {}
        : {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -12 },
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
          };

    return (
        <section id="contact" className="relative flex min-h-svh items-center overflow-hidden bg-ls-green-deep py-(--space-section)">
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-ls-green via-ls-green-deep to-ls-green-night" />

            <div className="relative z-10 mx-auto w-full max-w-2xl px-5 sm:px-6">
                <header className="mb-10 text-center">
                    <div className="mb-5 flex items-center justify-center gap-4">
                        <span className="ls-rule" aria-hidden="true" />
                        <span className="ls-label">Prenota</span>
                        <span className="ls-rule" aria-hidden="true" />
                    </div>
                    <h2 className="text-ls-ivory">Disegniamo la tua serata</h2>
                    <p className="prose-measure mx-auto mt-4 text-ls-ivory">
                        Raccontami la sera che hai in mente. Ti rispondo io, di persona, per
                        costruirla insieme.
                    </p>
                </header>

                <AnimatePresence mode="wait" initial={false}>
                    {submitted ? (
                        <motion.div
                            key="confirmation"
                            {...reveal}
                            className="rounded-3xl border border-ls-gold/40 bg-ls-green-deep/70 p-8 text-center backdrop-blur-md sm:p-10"
                        >
                            <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-ls-gold text-ls-green-night">
                                <MessageCircle className="h-7 w-7" aria-hidden="true" />
                            </span>
                            <h3 className="text-ls-ivory">Ci siamo quasi</h3>
                            <p className="mx-auto mt-3 max-w-sm text-ls-ivory-dim">
                                {popupBlocked
                                    ? "Non sono riuscito ad aprire WhatsApp in automatico. Apri tu il messaggio già pronto qui sotto."
                                    : "Ho aperto WhatsApp con il tuo messaggio già pronto: dai un'occhiata e premi invia. Ti risponderò al più presto."}
                            </p>

                            <div className="mt-7 flex flex-col items-center gap-3">
                                <a
                                    href={whatsappUrl()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ls-gold px-7 py-3.5 font-medium text-ls-green-night transition-colors duration-200 hover:bg-ls-gold-bright"
                                >
                                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                                    Apri il messaggio su WhatsApp
                                </a>
                                <a
                                    href={mailtoUrl()}
                                    className="text-sm text-ls-ivory-dim underline decoration-ls-gold/60 underline-offset-4 transition-colors hover:text-ls-ivory"
                                >
                                    Preferisci inviarlo via email?
                                </a>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="mt-1 text-sm text-ls-ivory/55 underline-offset-4 transition-colors hover:text-ls-ivory hover:underline"
                                >
                                    Compila una nuova richiesta
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.form key="form" {...reveal} noValidate onSubmit={handleSubmit} className="space-y-9">
                            {/* L'esperienza */}
                            <fieldset
                                ref={experienceRef}
                                tabIndex={-1}
                                aria-describedby={errors.experience ? `${baseId}-exp-error` : undefined}
                                className="space-y-3 outline-none"
                            >
                                <Legend>L&apos;esperienza</Legend>
                                <div role="radiogroup" aria-label="Scegli l'esperienza" className="grid gap-3 sm:grid-cols-3">
                                    {EXPERIENCES.map((exp) => {
                                        const checked = experienceId === exp.id;
                                        return (
                                            <label
                                                key={exp.id}
                                                className={
                                                    "group relative flex cursor-pointer flex-col gap-1 rounded-2xl border p-4 transition-colors duration-300 " +
                                                    (checked
                                                        ? "border-ls-gold bg-ls-gold/15 shadow-[0_0_0_1px_rgba(197,160,89,0.5),0_8px_30px_-12px_rgba(197,160,89,0.6)]"
                                                        : "border-ls-line bg-ls-ivory/[0.04] hover:border-ls-ivory/30 hover:bg-ls-ivory/[0.07]")
                                                }
                                            >
                                                <input
                                                    type="radio"
                                                    name="experience"
                                                    value={exp.id}
                                                    checked={checked}
                                                    onChange={() => selectExperience(exp)}
                                                    className="sr-only"
                                                />
                                                <span
                                                    className={
                                                        "absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border transition-colors duration-300 " +
                                                        (checked ? "border-ls-gold bg-ls-gold text-ls-green-night" : "border-ls-ivory/30 text-transparent")
                                                    }
                                                    aria-hidden="true"
                                                >
                                                    <Check className="h-3 w-3" strokeWidth={3} />
                                                </span>
                                                <div className="pr-6 font-medium text-ls-ivory">{exp.name}</div>
                                                <div className="text-sm leading-snug text-ls-ivory-dim">{exp.tagline}</div>
                                            </label>
                                        );
                                    })}
                                </div>
                                <FieldError id={`${baseId}-exp-error`} message={errors.experience} />
                            </fieldset>

                            {/* La serata */}
                            <fieldset className="space-y-4">
                                <Legend>La serata</Legend>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="overflow-hidden">
                                        <FieldLabel htmlFor={`${baseId}-date`}>Data preferita</FieldLabel>
                                        <input
                                            id={`${baseId}-date`}
                                            type="date"
                                            value={date}
                                            min={new Date().toISOString().split("T")[0]}
                                            onChange={(e) => setDate(e.target.value)}
                                            style={{ colorScheme: "dark" }}
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <FieldLabel id={`${baseId}-guests-label`}>Numero di ospiti</FieldLabel>
                                        <div
                                            className="flex items-center justify-between rounded-xl border border-ls-line bg-ls-ivory/[0.05] px-2 py-1.5"
                                            role="group"
                                            aria-labelledby={`${baseId}-guests-label`}
                                        >
                                            <Stepper
                                                label="Riduci ospiti"
                                                onClick={() => adjustGuests(-1)}
                                                disabled={!!experience?.fixed || guests <= (experience?.min ?? 2)}
                                                icon={<Minus className="h-4 w-4" />}
                                            />
                                            <span className="min-w-[2ch] text-center text-lg font-medium text-ls-ivory" aria-live="polite">
                                                {guests}
                                            </span>
                                            <Stepper
                                                label="Aggiungi ospiti"
                                                onClick={() => adjustGuests(1)}
                                                disabled={!!experience?.fixed || guests >= (experience?.max ?? 8)}
                                                icon={<Plus className="h-4 w-4" />}
                                            />
                                        </div>
                                        {experience?.fixed ? (
                                            <div className="mt-1.5 text-xs text-ls-gold-bright">Cin Cin è riservata a due ospiti.</div>
                                        ) : (
                                            <div className="mt-1.5 text-xs text-ls-ivory-dim">
                                                {experience ? `Da ${experience.min} a ${experience.max} ospiti.` : "Scegli un'esperienza per i limiti consigliati."}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <label className="flex cursor-pointer items-center gap-3 text-sm text-ls-ivory-dim">
                                    <button
                                        type="button"
                                        role="switch"
                                        aria-checked={flexible}
                                        onClick={() => setFlexible((v) => !v)}
                                        className="relative h-6 w-11 shrink-0 appearance-none rounded-full border-none bg-transparent p-0"
                                    >
                                        <span
                                            className={
                                                "block h-full w-full rounded-full transition-colors duration-200 " +
                                                (flexible ? "bg-ls-gold" : "bg-ls-ivory/20")
                                            }
                                        />
                                        <span
                                            className={
                                                "pointer-events-none absolute left-0 top-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-200 " +
                                                (flexible ? "translate-x-[22px]" : "translate-x-0.5")
                                            }
                                        />
                                    </button>
                                    Le mie date sono flessibili
                                </label>

                                <div>
                                    <FieldLabel htmlFor={`${baseId}-zona`}>Dove (città o zona)</FieldLabel>
                                    <input
                                        id={`${baseId}-zona`}
                                        type="text"
                                        value={zona}
                                        onChange={(e) => setZona(e.target.value)}
                                        placeholder="Es. Milano, Lugano, Como"
                                        className={inputClass}
                                    />
                                </div>
                            </fieldset>

                            {/* L'occasione */}
                            <fieldset className="space-y-4">
                                <Legend>L&apos;occasione</Legend>
                                <div>
                                    <FieldLabel htmlFor={`${baseId}-occasion`}>Cosa festeggiate</FieldLabel>
                                    <select
                                        id={`${baseId}-occasion`}
                                        value={occasion}
                                        onChange={(e) => setOccasion(e.target.value)}
                                        style={{ colorScheme: "dark" }}
                                        className={inputClass + " appearance-none"}
                                    >
                                        <option value="">Scegli un&apos;occasione (facoltativo)</option>
                                        {OCCASIONS.map((o) => (
                                            <option key={o} value={o} className="bg-ls-green-deep">
                                                {o}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <FieldLabel htmlFor={`${baseId}-notes`}>Note, allergie o desideri</FieldLabel>
                                    <textarea
                                        id={`${baseId}-notes`}
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        rows={3}
                                        placeholder="Allergie, ingredienti del cuore, l'atmosfera che immagini…"
                                        className={inputClass + " resize-none"}
                                    />
                                </div>
                            </fieldset>

                            {/* I tuoi contatti */}
                            <fieldset className="space-y-4">
                                <Legend>I tuoi contatti</Legend>
                                <div>
                                    <FieldLabel htmlFor={`${baseId}-name`} required>
                                        Come ti chiami
                                    </FieldLabel>
                                    <input
                                        id={`${baseId}-name`}
                                        ref={nameRef}
                                        type="text"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                                        }}
                                        autoComplete="name"
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
                                        placeholder="Nome e cognome"
                                        className={inputClass}
                                    />
                                    <FieldError id={`${baseId}-name-error`} message={errors.name} />
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <FieldLabel htmlFor={`${baseId}-phone`}>Telefono</FieldLabel>
                                        <input
                                            id={`${baseId}-phone`}
                                            ref={phoneRef}
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                                if (errors.contact) setErrors((p) => ({ ...p, contact: undefined }));
                                            }}
                                            autoComplete="tel"
                                            aria-invalid={!!errors.contact}
                                            aria-describedby={errors.contact ? `${baseId}-contact-error` : undefined}
                                            placeholder="+39 …"
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <FieldLabel htmlFor={`${baseId}-email`}>Email</FieldLabel>
                                        <input
                                            id={`${baseId}-email`}
                                            type="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (errors.contact || errors.email)
                                                    setErrors((p) => ({ ...p, contact: undefined, email: undefined }));
                                            }}
                                            autoComplete="email"
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? `${baseId}-email-error` : undefined}
                                            placeholder="nome@email.it"
                                            className={inputClass}
                                        />
                                    </div>
                                </div>
                                <FieldError id={`${baseId}-contact-error`} message={errors.contact} />
                                <FieldError id={`${baseId}-email-error`} message={errors.email} />
                            </fieldset>

                            <div className="space-y-4 pt-1">
                                <button
                                    type="submit"
                                    className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-ls-gold px-8 py-4 text-lg font-medium text-ls-green-night transition-[background-color,transform] duration-200 hover:bg-ls-gold-bright active:scale-[0.99]"
                                >
                                    <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
                                    Invia la richiesta su WhatsApp
                                </button>
                                <div className="text-center text-xs text-ls-ivory-dim">
                                    Nessun pagamento ora. Apro WhatsApp con il messaggio pronto da inviare.
                                </div>
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>

                {/* Fallback diretto */}
                <div className="mt-10 border-t border-ls-line pt-7 text-center">
                    <div className="text-sm text-ls-ivory-dim">Preferisci scrivermi direttamente?</div>
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                        <DirectLink href={`https://wa.me/${WHATSAPP_NUMBER}`} icon={<MessageCircle className="h-4 w-4" />}>
                            WhatsApp
                        </DirectLink>
                        <DirectLink href={`mailto:${EMAIL_ADDRESS}`} icon={<Mail className="h-4 w-4" />}>
                            {EMAIL_ADDRESS}
                        </DirectLink>
                        <DirectLink href={`tel:${PHONE_HREF}`} icon={<Phone className="h-4 w-4" />}>
                            {PHONE_DISPLAY}
                        </DirectLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Legend({ children }: { children: React.ReactNode }) {
    return (
        <legend className="mb-1 flex items-center gap-3 text-base font-medium text-ls-ivory">
            <span className="h-px w-6 bg-ls-gold" aria-hidden="true" />
            {children}
        </legend>
    );
}

function FieldLabel({
    children,
    htmlFor,
    id,
    required,
}: {
    children: React.ReactNode;
    htmlFor?: string;
    id?: string;
    required?: boolean;
}) {
    return (
        <label htmlFor={htmlFor} id={id} className="mb-1.5 block text-sm font-medium text-ls-ivory/90">
            {children}
            {required && <span className="ml-0.5 text-ls-gold-bright">*</span>}
        </label>
    );
}

function FieldError({ id, message }: { id: string; message?: string }) {
    if (!message) return null;
    return (
        <div id={id} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-[#f0a78d]">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            {message}
        </div>
    );
}

function Stepper({
    label,
    onClick,
    disabled,
    icon,
}: {
    label: string;
    onClick: () => void;
    disabled: boolean;
    icon: React.ReactNode;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ls-ivory transition-colors duration-200 hover:bg-ls-ivory/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
            {icon}
        </button>
    );
}

function DirectLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
    const external = href.startsWith("http");
    return (
        <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-2 text-sm text-ls-ivory-dim transition-colors duration-200 hover:text-ls-gold"
        >
            <span className="text-ls-gold">{icon}</span>
            {children}
        </a>
    );
}
