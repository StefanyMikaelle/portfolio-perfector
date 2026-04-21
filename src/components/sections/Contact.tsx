import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./About";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Tell me a bit more").max(1000),
});

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
    toast.success("Message sent — I'll reply within 24h.");
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="// contact.init()"
          title="Let's build something solid"
          subtitle="Open to backend roles, freelance work and technical conversations."
        />

        <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <div className="space-y-4">
            <ContactLink
              icon={Mail}
              label="Email"
              value="stefany_mikaelle@hotmail.com"
              href="mailto:stefany_mikaelle@hotmail.com"
              color="var(--neon-purple)"
            />
            <ContactLink
              icon={Github}
              label="GitHub"
              value="github.com/StefanyMikaelle"
              href="https://github.com/StefanyMikaelle"
              color="var(--neon-cyan)"
            />
            <ContactLink
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/stefany-mikaelle-da-silva-lima"
              href="https://www.linkedin.com/in/stefany-mikaelle-da-silva-lima-b71560120/"
              color="var(--neon-blue)"
            />

            <div className="glass-card rounded-xl p-5 mt-6">
              <p className="font-mono-tech text-xs text-muted-foreground">$ uptime</p>
              <p className="font-mono-tech text-sm mt-2">
                <span className="text-[color:var(--neon-cyan)]">●</span> Available — replies within 24h
              </p>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 space-y-4"
          >
            <Field label="Name" name="name" placeholder="Your name" error={errors.name} />
            <Field label="Email" name="email" type="email" placeholder="you@domain.com" error={errors.email} />
            <Field
              label="Message"
              name="message"
              as="textarea"
              placeholder="What are you building?"
              error={errors.message}
            />
            <button
              type="submit"
              disabled={loading || sent}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[color:var(--neon-purple)] to-[color:var(--neon-blue)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_oklch(0.7_0.28_295/0.4)] transition hover:shadow-[0_0_50px_oklch(0.7_0.28_295/0.7)] disabled:opacity-60"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> {loading ? "Sending..." : "Send Message"}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
  color,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      className="glass-card rounded-xl p-4 flex items-center gap-4 group hover:border-[color:var(--neon-cyan)]/60"
    >
      <div
        className="rounded-lg p-3 transition-shadow group-hover:shadow-[0_0_20px_currentColor]"
        style={{ background: `oklch(from ${color} l c h / 0.15)`, color }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-mono-tech text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </a>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  as = "input",
  error,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
  error?: string;
}) {
  const cls =
    "w-full rounded-md bg-background/60 border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[color:var(--neon-purple)] focus:shadow-[0_0_15px_oklch(0.7_0.28_295/0.3)] transition";
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="font-mono-tech text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea id={name} name={name} placeholder={placeholder} rows={5} className={cls} />
      ) : (
        <input id={name} name={name} type={type} placeholder={placeholder} className={cls} />
      )}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
