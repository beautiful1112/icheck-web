export const guides = [
  {
    slug: "getting-started",
    category: "START HERE",
    title: "Getting started",
    description:
      "Meet iCheck and prepare a self-hosted lab evaluation on Ubuntu.",
    keywords:
      "install installation ubuntu linux systemd requirements download self-hosted docker",
    source: "native-one-command-installer.md",
    content: `
<p class="lead">Start with a dedicated lab host, then connect your own infrastructure and AI provider.</p>
<div class="notice"><strong>Engineering Preview v0.1.</strong> Evaluate iCheck in a controlled lab. The native installer is for a fresh host; it is not an upgrade tool for an existing installation.</div>
<h2>What you will run</h2>
<p>iCheck is an AI operator and capability builder for infrastructure operations. Prometheus collects metrics and Grafana displays them. iCheck adds investigation, reusable capabilities, and reviewed operational workflows.</p>
<p>The native preview uses Linux processes managed by systemd. Docker is not required. This public website introduces the project; it is separate from your self-hosted iCheck instance.</p>
<h2>Prepare an evaluation host</h2>
<ul><li>A dedicated, freshly installed <strong>Ubuntu 24.04 x86_64</strong> server with systemd.</li><li>At least <strong>3 GiB RAM</strong> and <strong>10 GiB free root filesystem space</strong>. Allow additional capacity for monitoring data and backups.</li><li>Root or sudo access, a server IPv4 address, and the private monitoring networks you intend to approve.</li><li>Outbound HTTPS for the pinned dependencies and access to the configured signed Ubuntu repositories.</li><li>No pre-existing iCheck, PostgreSQL, or nginx installation on the host.</li></ul>
<h2>Download and verify the installer</h2>
<p>Read the <a href="https://github.com/beautiful1112/iCheck/blob/main/docs/native-one-command-installer.md">native installation guide</a> and check the <a href="https://github.com/beautiful1112/iCheck/releases">GitHub prerelease assets</a> for the installer and matching checksums. Automatic GitHub source archives are not installers. Follow the verification and installation instructions for that exact release.</p>
<p>The installer prompts for the server address, monitoring networks, and an administrator passphrase. It provisions the application, native services, database roles, and local evaluation HTTPS. Use the documented certificate trust procedure on your client.</p>
<h2>Configure through your instance</h2>
<ol><li><strong>Sign in</strong> using the administrator credentials you created during setup.</li><li><strong>Add assets and credentials</strong> through the protected GUI. Installation does not discover or enroll devices for you.</li><li><strong>Configure an AI provider</strong> for AI features. No model or search provider is preconfigured.</li><li><strong>Review a monitoring template</strong> in Capability Studio, test a selected target, and explicitly enable collection when ready.</li><li><strong>Inspect evidence</strong> in monitoring and Grafana before starting a bounded AI investigation.</li></ol>
<h2>Keep the evaluation scoped</h2>
<p>The preview installer is a single-node evaluation setup. It does not open your firewall or make the instance public. Real device access, alert delivery, model behavior, credential renewal, and production readiness require separate checks in your environment.</p>
<p>Continue with the <a href="/docs/preview-status/">preview status</a> and the repository’s <a href="https://github.com/beautiful1112/iCheck/blob/main/docs/engineering-preview-quick-start.md">GUI quick start</a>.</p>`,
  },
  {
    slug: "ai-operator",
    category: "PLATFORM",
    title: "AI Operator",
    description:
      "Investigate infrastructure with scoped tools, attributed evidence, and visible unknowns.",
    keywords:
      "ai agent operator investigation evidence automation scope permissions review model provider",
    source: "agent-runtime.md",
    content: `
<p class="lead">Ask operational questions, inspect the evidence, and keep the next step grounded in what is actually known.</p>
<h2>From an alert to an investigation</h2>
<p>AI Operator brings a conversational entry point to infrastructure investigation. Its available tools depend on configured capabilities, permissions, and the scope of the task. Retained tool calls and evidence help you understand what the operator read and how it reached a conclusion.</p>
<p>A monitoring alert or a saved workflow can provide context for an investigation. Opening a prepared task does not itself run it. Configure the provider, choose an appropriate scope, and launch the task explicitly.</p>
<h2>Evidence stays connected to its source</h2>
<p>Investigations can use authorized inventory, metric history, and registered tools. External alerts retain their monitoring-source context. Inspect timestamps, target identity, scope, and tool outcomes when assessing the result.</p>
<p>Missing or inconsistent evidence is an unknown. It should not be interpreted as a healthy target or a resolved incident. Acknowledging an alert is also separate from proving recovery.</p>
<h2 id="review-and-scope">Review and scope</h2>
<ul><li><strong>Task scope:</strong> keep the operator’s work bounded to the intended investigation and authorized targets.</li><li><strong>Tool access:</strong> installed tools still depend on current caller permissions and configured device access.</li><li><strong>Reviewed proposals:</strong> inspect proposed changes, such as a Grafana dashboard revision, before applying them through the review flow.</li><li><strong>Separate activation:</strong> publishing a capability does not automatically install it, enroll targets, or schedule work.</li></ul>
<h2>Automatic investigation is opt-in</h2>
<p>External alert feeds and standing investigation policies are separate controls. They must be configured and explicitly enabled. Source silence, suppression, closure, and scope changes can stop further automatic investigation. Consult the external alert guide before enabling this behavior.</p>
<h2>Evaluate with your own environment</h2>
<p>Model behavior, device reachability, and complete operational outcomes need lab validation. The website’s example incident uses illustrative data and does not connect to your infrastructure.</p>
<p>Read the <a href="https://github.com/beautiful1112/iCheck/blob/main/docs/external-alert-investigation.md">external alert investigation guide</a> for feed behavior and stopping conditions.</p>`,
  },
  {
    slug: "capability-studio",
    category: "PLATFORM",
    title: "Capability Studio",
    description:
      "Create, validate, version, and publish collectors, MCP servers, workflows, and skills.",
    keywords:
      "studio builder mcp netmiko plugin tools skills workflow collector template packages versions rollback",
    source: "capability-studio.md",
    content: `
<p class="lead">Turn operational knowledge into capabilities you can inspect, revise, and reuse.</p>
<h2>A library for your operational building blocks</h2>
<p>Capability Studio organizes data collectors, MCP servers, function tools, workflows and skills, and other capabilities. The library distinguishes authored versions, published artifacts, installation state, and recorded runtime checks.</p>
<p><strong>Create with AI</strong> opens a separate builder conversation. Describe the task, inspect the generated result, validate it, and review the exact version before publishing.</p>
<h2>What you can build</h2>
<ul><li><strong>Monitoring templates:</strong> SNMP, HTTP/API, Linux, Windows, container, and VMware monitoring through the preview’s native template workflows.</li><li><strong>MCP servers:</strong> generated executable packages with contained tools, including Netmiko-based interface checks and protected configuration backups.</li><li><strong>Workflows and skills:</strong> reusable checks that can open a prepared Operator task with guided inputs.</li><li><strong>Grafana dashboard proposals:</strong> build and revise dashboard proposals, then review changes before applying them.</li></ul>
<h2>Publication is one step in the lifecycle</h2>
<p>A draft is not an installed capability. A published monitoring template does not prove collection is enabled or fresh. Installing an MCP server does not prove a particular device is reachable.</p>
<p>Review the relevant state at each step: validation, version, publication, installation, device access, enrollment, and recorded runtime evidence.</p>
<h2>Reusable MCP packages</h2>
<p>The library represents one server package with its contained tools. Approval and installation are package-wide. For reusable installations, device access resolves from inventory and the current caller’s authorization at invocation time.</p>
<p>Device credentials and SSH identity belong to asset access settings. Installing or browsing a package does not execute a live device check or create a schedule. Optional selected-device tests are separate operations.</p>
<h2>Portable operation packages</h2>
<p>The preview supports portable operation packages over the existing artifact lifecycle. Packages can describe workflows, skills, collectors, generated MCP servers, external tool contracts, and connector requirements. Review requirements and imported artifacts before activation.</p>
<div class="notice">Generated code and successful validation are not guarantees of real-device compatibility. Test your selected targets and review the recorded results in your own lab.</div>`,
  },
  {
    slug: "integrations",
    category: "CONNECT YOUR STACK",
    title: "Monitoring & integrations",
    description:
      "Connect Prometheus, Grafana, Zabbix, SolarWinds / Orion, and REST bridge sources.",
    keywords:
      "monitoring integration prometheus grafana zabbix solarwinds orion rest bridge webhook snmp http vmware",
    source: "integrations-and-operation-packages.md",
    content: `
<p class="lead">Keep your monitoring foundation and bring its signals into a connected investigation workflow.</p>
<h2>Prometheus and Grafana</h2>
<p>Prometheus handles metric collection; Grafana displays dashboards. iCheck helps author monitoring templates and reviewed Grafana proposals, and links configured resources and source alerts to saved dashboards.</p>
<p>Native monitoring templates cover SNMP, HTTP/API, Linux, Windows, containers, and VMware. Template publication, target enrollment, fresh measurements, and notification delivery are distinct states.</p>
<h2>External monitoring sources</h2>
<ul><li><strong>Zabbix:</strong> read-only API token access for the supported 7.0/7.4 host-group, trigger-alert, and numeric item-history paths.</li><li><strong>SolarWinds Platform / Orion:</strong> read-only SWIS access for the initial node-oriented adapter. SolarWinds Observability SaaS uses a different API and is not implied by this support.</li><li><strong>REST / webhook bridge:</strong> a versioned connector contract for an operator-controlled endpoint. A notification is a recheck hint; the worker reads the approved source before accepting alert state.</li></ul>
<h2>Connect in deliberate steps</h2>
<ol><li>Approve the exact HTTPS source origin in your instance’s server policy and configure the appropriate trusted CA.</li><li>Save a disabled connection with read-only credentials.</li><li>Discover groups, choose the scope, and preview resources.</li><li>Enable inventory synchronization and review asset mappings.</li><li>Enable the separate alert feed if needed.</li><li>Only enable standing AI investigation after reviewing the policy and completing environment validation.</li></ol>
<h2>Keep source meaning intact</h2>
<p>Inventory import does not enroll duplicate polling. Acknowledgement does not prove recovery. Source muting, local silence, closure, and disabling feeds have distinct effects on investigation. Missing or inconsistent evidence blocks further automatic work instead of implying recovery.</p>
<div class="notice"><strong>Preview support is implemented; live vendor qualification is separate.</strong> Follow the repository’s lab checklist for your monitoring product, device type, and deployment before enabling automatic investigation.</div>`,
  },
  {
    slug: "preview-status",
    category: "PROJECT",
    title: "Preview status",
    description:
      "Understand the engineering preview, current feature boundaries, and evaluation limits.",
    keywords:
      "release roadmap version preview production limitations status readiness r19.28 open source",
    source: "engineering-preview-known-limitations.md",
    content: `
<p class="lead">iCheck is Engineering Preview v0.1: a project to explore and evaluate in a controlled lab.</p>
<p>This public overview was reviewed against the local project documentation on <strong>27 October 2026</strong>. The repository is the source for current release assets and detailed acceptance records.</p>
<h2>Current project direction</h2>
<p>iCheck focuses on AI Operator and Capability Studio. Prometheus collects metrics, Grafana displays dashboards, and iCheck connects investigation and capability building to that foundation.</p>
<p>The reviewed README identifies the deployed preview as <strong>r19.28</strong>, with monitoring connections for Zabbix, SolarWinds / Orion, and a REST bridge, plus portable operation packages and built-in operation packs.</p>
<h2>What the public site describes</h2>
<ul><li>AI-assisted investigation with retained evidence and scoped tools.</li><li>Studio authoring, validation, versioning, and publication workflows.</li><li>Native monitoring templates and reviewed Grafana proposals.</li><li>External monitoring-source connections and portable operation packages.</li><li>A native, single-node Ubuntu evaluation installation.</li></ul>
<h2>What still needs environment validation</h2>
<ul><li>Live vendor connections and representative real-device coverage.</li><li>Complete alert notification delivery and end-to-end operational workflows.</li><li>Model quality and behavior for your actual tasks and providers.</li><li>Fleet capacity, high availability, recovery behavior, and broader production readiness.</li></ul>
<p>Selected lab checks in the repository do not imply general compatibility or production qualification. Review the detailed known limitations and the acceptance evidence for the exact release you evaluate.</p>
<h2>Website and application are separate</h2>
<p>This is a public introduction and guide site. Its walkthrough uses illustrative data. It has no access to your assets, credentials, monitoring sources, or self-hosted Operator. There is no live infrastructure operation behind the example buttons.</p>
<h2>Follow the project</h2>
<p>Visit <a href="https://github.com/beautiful1112/iCheck">iCheck on GitHub</a> for source and documentation, <a href="https://github.com/beautiful1112/iCheck/releases">releases</a> for available assets, and <a href="https://github.com/beautiful1112/iCheck/issues">issues</a> to share reproducible feedback. Omit credentials and private infrastructure data from public reports.</p>`,
  },
] as const;
