class UiHead extends HTMLElement {

  connectedCallback() {

    // UTF-8
    const charset = document.createElement("meta");
    charset.setAttribute("charset", "UTF-8");
    document.head.append(charset);

    // viewport
    const viewport = document.createElement("meta");
    viewport.setAttribute("name", "viewport");
    viewport.setAttribute(
      "content",
      "width=device-width, initial-scale=1.0"
    );
    document.head.append(viewport);

    const lines = this.textContent
      .trim()
      .split("\n")
      .map(line => line.trim())
      .filter(Boolean);

    lines.forEach(line => {

      if (line.startsWith("title")) {

        const title = line
          .replace(/^title\s*=\s*/, "")
          .replace(/^["']|["']$/g, "");

        const element = document.createElement("title");
        element.textContent = title;

        document.head.append(element);

      } else if (line.endsWith(".css")) {

        const link = document.createElement("link");

        link.rel = "stylesheet";
        link.href = `./styles/${line}`;

        document.head.append(link);

      } else if (line.endsWith(".js")) {

        const script = document.createElement("script");

        script.src = line === "main.js"
          ? `./scripts/${line}`
          : `./scripts/components/${line}`;

        //script.defer = false;

        document.head.append(script);
      }

    });

    this.remove();

  }

}

customElements.define("ui-head", UiHead);
