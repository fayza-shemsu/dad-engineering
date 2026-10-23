const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export async function sendInquiry(data) {
  if (!ENDPOINT) {
    console.error("VITE_FORMSPREE_ENDPOINT is not set");
    return { ok: false, error: "Form is not configured." };
  }

  // Honeypot: bots fill this hidden field, real people never do
  if (data._gotcha) return { ok: true };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        company: data.company,
        phone: data.phone,
        email: data.email,
        service: data.service,
        message: data.message,
        _subject: "New quote request - DAD Engineering Workshop website",
      }),
      signal: controller.signal,
    });

    if (res.ok) return { ok: true };

    let error = "Request failed (" + res.status + ")";
    try {
      const body = await res.json();
      if (body && body.errors && body.errors.length) {
        error = body.errors.map((e) => e.message).join(", ");
      }
    } catch (_) {}
    console.error("Formspree error:", error);
    return { ok: false, error };
  } catch (err) {
    console.error("Network error:", err);
    return { ok: false, error: "Network error" };
  } finally {
    clearTimeout(timer);
  }
}
