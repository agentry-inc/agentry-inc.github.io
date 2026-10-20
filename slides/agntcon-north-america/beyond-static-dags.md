---
marp: true
theme: default
paginate: false
backgroundColor: #0a0a0a
color: #ffffff
header: ''
footer: ''
style: |
  @font-face { font-family: 'Inter'; font-weight: 400; font-style: normal; src: url('fonts/inter-latin-400-normal.woff') format('woff'); }
  @font-face { font-family: 'Inter'; font-weight: 400; font-style: italic; src: url('fonts/inter-latin-400-italic.woff') format('woff'); }
  @font-face { font-family: 'Inter'; font-weight: 600; font-style: normal; src: url('fonts/inter-latin-600-normal.woff') format('woff'); }
  @font-face { font-family: 'Inter'; font-weight: 700; font-style: normal; src: url('fonts/inter-latin-700-normal.woff') format('woff'); }
  @font-face { font-family: 'Inter'; font-weight: 800; font-style: normal; src: url('fonts/inter-latin-800-normal.woff') format('woff'); }
  @font-face { font-family: 'JetBrains Mono'; font-weight: 400; font-style: normal; src: url('fonts/jetbrains-mono-latin-400-normal.woff') format('woff'); }
  @font-face { font-family: 'JetBrains Mono'; font-weight: 600; font-style: normal; src: url('fonts/jetbrains-mono-latin-600-normal.woff') format('woff'); }

  section {
    font-family: 'Inter', 'Noto Sans', sans-serif;
    font-size: 28px;
    position: relative;
    color: #e4e4e7;
    background-color: #0a0a0a;
    background-image:
      radial-gradient(circle at 15% 90%, rgba(0, 212, 255, 0.10) 0%, rgba(0, 212, 255, 0) 45%),
      radial-gradient(circle at 90% 10%, rgba(99, 102, 241, 0.12) 0%, rgba(99, 102, 241, 0) 45%);
  }

  h1 {
    color: #ffffff;
    font-size: 2.1em;
    margin-right: 200px; /* Make room for logo */
    margin-bottom: 30px;
    font-weight: 800;
    letter-spacing: -0.02em;
  }
  h2 {
    color: #00d4ff;
    font-size: 1.8em;
    font-weight: 700;
  }
  h3 {
    color: #ffffff;
    font-size: 1.5em;
    font-weight: 600;
  }
  p, li {
    color: #e4e4e7;
  }
  a {
    color: #00d4ff;
    text-decoration: none;
  }
  blockquote {
    border-left: 4px solid #00d4ff;
    color: #ffffff;
    font-style: italic;
    margin: 0.5em 0;
    font-size: 1.15em;
    background-color: rgba(0, 212, 255, 0.07);
    padding: 15px 20px;
    border-radius: 0 8px 8px 0;
  }
  blockquote p {
    color: #ffffff;
  }
  table {
    font-size: 0.8em;
    border-collapse: collapse;
    width: 100%;
    background-color: #111111;
  }
  table tr {
    background-color: #111111;
  }
  table th {
    background-color: #0b2a33;
    color: #00d4ff;
    font-weight: 600;
    padding: 8px;
    border-bottom: 1px solid #2a2a2a;
  }
  table td {
    background-color: #111111;
    color: #e4e4e7;
    padding: 8px;
    border-bottom: 1px solid #2a2a2a;
  }
  li {
    margin-bottom: 0.6em;
    position: relative;
    padding-left: 5px;
  }
  ul li::before {
    content: "\2022";
    color: #00d4ff;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  .logo {
    position: absolute !important;
    right: 40px !important;
    top: 38px !important;
    width: 170px !important;
    height: auto !important;
    margin: 0 !important;
    z-index: 1000 !important;
    display: block !important;
  }

  /* Gradient bar, matching the site's primary gradient */
  section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #00d4ff, #6366f1);
  }

  strong {
    color: #00d4ff;
    font-weight: 600;
  }

  code, pre {
    font-variant-ligatures: none;
    font-feature-settings: "liga" 0, "calt" 0;
  }
  code {
    background-color: #1e1e1e;
    border: 1px solid #2a2a2a;
    border-radius: 4px;
    padding: 2px 6px;
    font-family: 'JetBrains Mono', 'Noto Sans Mono', monospace;
    font-size: 0.78em;
    color: #00d4ff;
  }
  pre {
    background-color: #111111;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 16px 18px;
    font-family: 'JetBrains Mono', 'Noto Sans Mono', monospace;
    font-size: 0.72em;
    color: #e4e4e7;
  }
  pre code {
    background: none;
    border: none;
    padding: 0;
    color: #e4e4e7;
    font-size: 1em;
  }
  pre [class^="hljs-"] { color: #e4e4e7; }
  pre .hljs-attr, pre .hljs-attribute { color: #00d4ff; }
  pre .hljs-string { color: #d4d4d8; }
  pre .hljs-number, pre .hljs-literal { color: #f59e0b; }
  pre .hljs-keyword, pre .hljs-built_in, pre .hljs-title, pre .hljs-meta { color: #a5b4fc; }
  pre .hljs-comment { color: #71717a; font-style: italic; }
  pre .hljs-punctuation { color: #a1a1aa; }

  section.divider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 100px;
    background-image:
      radial-gradient(circle at 10% 100%, rgba(0, 212, 255, 0.22) 0%, rgba(0, 212, 255, 0) 55%),
      radial-gradient(circle at 95% 0%, rgba(99, 102, 241, 0.28) 0%, rgba(99, 102, 241, 0) 55%);
  }
  section.divider h1 {
    color: #00d4ff;
    font-size: 2.6em;
    margin: 0 0 20px 0;
  }
  section.divider p {
    color: #a1a1aa;
    font-size: 1.1em;
    margin: 0;
  }
  section.divider .kicker {
    color: #f59e0b;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75em;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  section.lead h1 {
    color: #ffffff;
    font-size: 2.3em;
  }
  section.lead strong {
    color: #00d4ff;
  }
  section.lead p {
    color: #a1a1aa;
  }

  /* Status badge for features not shipped yet */
  .badge {
    display: inline-block;
    vertical-align: middle;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.32em;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #0a0a0a;
    background-color: #f59e0b;
    padding: 4px 12px;
    border-radius: 4px;
    margin-left: 12px;
  }

  .footer {
    position: absolute;
    bottom: 12px;
    left: 20px;
    font-size: 0.6em;
    color: #71717a;
  }
---


<!-- _class: lead -->
# Beyond Static DAGs: Orchestrating AI-Generated Multi-Agent Workflows

**Cong Wang**
Founder and CEO, Agentry, Inc.

AGNTCon North America 2026

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# Your Planner Just Wrote a Workflow

```json
{ "goal": "Should we enter the EU market?",
  "plan": [
    { "parallel": ["market@acme.com", "legal@acme.com", "competitor@partner.io"] },
    { "if": "confidence > 0.8",
      "then": "synthesis@acme.com", "else": "human-review@acme.com" } ] }
```

**Now what runs it?**

- Who fans out, who waits, and what if `legal@` never answers?
- How does `synthesis@` see the research?
- `partner.io` runs CrewAI, we run LangGraph. Now what?

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# Every Layer Says "Not My Job"

| Tool | Orchestrates | Why it does not run this plan |
|------|-------------|-------------------------------|
| Kubernetes | Containers | No notion of a step, a reply, or a dependency |
| Kubeflow / Argo | Static DAGs | DAG is compiled ahead of time, this plan exists only at runtime |
| LangGraph / CrewAI | Graphs inside one app | One ecosystem, context wired by hand, stops at your org boundary |
| A2A | Agent to agent wire | Defines how agents talk, not how work executes |
| MCP | Agent to tool | Not agent to agent at all |

> *The orchestration layer for dynamic multi-agent workflows is missing.*

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# Where Agentry Sits

```
                 planner@acme.com  (any LLM, emits a plan as JSON)
                          |
                          v
          +-------------------------------+        +---------------------+
          |   Agentry gateway  acme.com   |<------>| gateway  partner.io |
          | addressing, delivery, state,  |  AMTP  +---------------------+
          | timeouts, signatures          |                  |
          +-------------------------------+         competitor@partner.io
             |              |             |              (CrewAI)
       market@acme.com  legal@acme.com  synthesis@acme.com
         (LangGraph)    (plain Python)    (anything)
             |              |
          MCP tools      MCP tools
```

Frameworks build the agent. MCP gives it tools. **Agentry runs the work between agents.**

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

<!-- _class: divider -->
<p class="kicker">Part 1</p>

# AMTP: Email for Agents

Addressing, delivery, and trust across organizations

---

# Why Email?

Email already solved the hard parts of talking to strangers:

| Email | AMTP |
|-------|------|
| `alice@acme.com` | `market@acme.com` |
| MX record | `_amtp.<domain>` TXT record |
| Store and forward, retries, bounces | At-least-once delivery, idempotency, status API |
| DKIM | Domain signatures, keys in DNS |
| No central registry | No central registry |

What email lacks: structured payloads, schemas, and **coordination**. AMTP adds all three.

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# Addressing by DNS

```
_amtp.acme.com.        IN TXT "v=amtp1;gateway=https://gw.acme.com:443"
k1._amtpkey.acme.com.  IN TXT "v=amtpkey1;alg=ES256;p=<base64-public-key>"
```

- Sending gateway resolves `_amtp.<domain>`, caches it, POSTs to `/v1/messages`
- Each organization runs its own gateway, no shared control plane
- Behind a gateway, an agent is just an address: any framework, any language
- **Push** to the agent's webhook, or let it **pull** from `GET /v1/inbox/{address}`

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# Delivery, Built In

- **At-least-once:** UUIDv7 `message_id` plus `idempotency_key`, duplicates dropped
- **Retries:** exponential backoff, ±25% jitter, capped at 5 minutes, only on retryable errors
- **Status:** `GET /v1/messages/{id}/status`, per recipient
- **Schemas:** AGNTCY schema IDs, payloads validated at the gateway
- **Deploy:** single binary, Docker, Helm chart, PostgreSQL for replicas

Your agent code handles one message and sends one reply. The gateway handles the network.

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# Trust Across Organizations

**Domain signatures, DKIM for agents:**

- Sending gateway signs the whole body: RFC 8785 canonical JSON, ES256 or RS256
- Receiver fetches `<selector>._amtpkey.<sender domain>`, verifies the raw bytes
- Gateway stamps the result on the message, never trusts the wire: `verified`, `invalid`, ...
- Unsigned remote mail: `accept`, `flag`, or `reject`. Local agents: per-agent API key

> *Only authenticated senders can advance a workflow. A forged "I'm done" is ignored.*

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

<!-- _class: divider -->
<p class="kicker">Part 2</p>

# Running a Plan Generated at Runtime

The workflow is data, not code

---

# Three Coordination Primitives

<style scoped>table { font-size: 0.7em; }</style>

A workflow is a `coordination` block on an ordinary message:

| Type | Fields | Semantics |
|------|--------|-----------|
| `parallel` | `required_responses`, `optional_responses` | Fan out to all, finish when every participant has answered |
| `sequential` | `sequence` | One agent at a time, next step dispatched on each reply |
| `conditional` | `recipients`, `conditions: [{if, then, else}]` | Evaluate the first reply, run one branch, mark the other skipped |

Common to all: `timeout` and `stop_on_failure`. **The planner emits JSON, the gateway runs it.**

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# From Plan to Message

```json
{
  "sender": "planner@acme.com",
  "recipients": ["market@acme.com", "legal@acme.com", "competitor@partner.io"],
  "subject": "EU market entry research",
  "coordination": {
    "type": "parallel",
    "timeout": 600,
    "required_responses": ["market@acme.com", "legal@acme.com", "competitor@partner.io"],
    "stop_on_failure": true
  },
  "payload": { "question": "Should we enter the EU market?" }
}
```

One `POST /v1/messages`. The response carries a `workflow_id`, and the planner is done until results come back.

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# The Workflow Lifecycle

```
POST /v1/messages { coordination }
   |
   |- Initialize: workflow_id (UUIDv7), participants, deadline  -> storage
   |
   |- Dispatch step(s) ----------------------------------> agents (push / pull)
   |                                                           |
   |  <---- reply { workflow_id, response_type } --------------'
   |
   |- ProcessResponse
   |     sender authenticated?  participant still pending?
   |     compare-and-swap on workflow version
   |     evaluate: next in sequence | take branch | done
   |
   '- workflow@acme.com --> planner@acme.com : aggregated results
```

Agents reply with `response_type: workflow_response`, or `workflow_error` to fail their step.

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# Built for Failure

<style scoped>table { font-size: 0.7em; }</style>

| What goes wrong | What Agentry does |
|-----------------|-------------------|
| An agent never answers | Deadline sweeper marks workflow and pending steps `timeout`, notifies the sender |
| An agent fails | `workflow_error` reply, `stop_on_failure` ends the workflow early |
| A step is re-dispatched | Idempotency key = hash(workflow, step), receivers deduplicate |
| Two replicas, two replies, same instant | Optimistic version check on shared PostgreSQL, loser retries |
| Duplicate or forged reply | Dropped: participant not pending, or sender not authenticated |
| Network blip | Per-message retries with exponential backoff |

> *State lives in the gateway, not in the planner's context window.*

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# Conditionals

```json
"recipients": ["critic@acme.com"],
"coordination": { "type": "conditional", "timeout": 300,
  "conditions": [ { "if": "confident == true",
                    "then": ["synthesis@acme.com"],
                    "else": ["human-review@acme.com"] } ] }
```

- `critic@` replies, the gateway evaluates `if` against its payload
- Matching branch is dispatched, the other is marked `skipped`
- Today: `key == value` on the reply payload
- Next: numeric comparisons, so the plan can say `confidence > 0.8` directly

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# Shared Context <span class="badge">In progress</span>

**Today:** replies are stored per step, the sender gets them all at the end:

```json
{ "workflow_id": "0199...", "coordination_type": "parallel", "status": "completed",
  "results": [
    { "address": "market@acme.com", "status": "completed", "payload": { } },
    { "address": "legal@acme.com",  "status": "completed", "payload": { } } ] }
```

**Next:**

- Context shared between agents in a workflow: `synthesis@` sees the research, no wiring
- Token-aware selection and summarization of what gets forwarded
- Composite plans: parallel, then conditional, as one workflow

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

<!-- _class: divider -->
<p class="kicker">Part 3</p>

# Fitting Your Stack

MCP, A2A, your framework, and Agentry

---

# Plugging In an Agent

Register once: `POST /v1/admin/agents {"address": "market", "delivery_mode": "push", "push_target": ...}`

```python
@app.post("/webhook")                       # Agentry pushes here
def on_message(msg: dict):
    result = research_graph.invoke(msg["payload"])   # LangGraph, CrewAI, plain code
    requests.post(f"{GATEWAY}/v1/messages",
        headers={"Authorization": f"Bearer {API_KEY}"},
        json={
            "sender": "market@acme.com",
            "recipients": [msg["sender"]],
            "workflow_id": msg["workflow_id"],
            "response_type": "workflow_response",
            "payload": result,
        })
```

Plain HTTP shown, so any language works. Python SDK: `pip install amtp`

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# How It Fits with MCP and A2A

| Layer | Question it answers | Example |
|-------|--------------------|---------|
| MCP | How does an agent call a tool? | Search, database, code runner |
| Framework | How is one agent built? | LangGraph, CrewAI, your own loop |
| A2A | How do two agents talk? | Agent cards, tasks, streaming |
| **Agentry / AMTP** | **How does a multi-agent plan execute, across orgs?** | Addressing, durable delivery, workflow state, signatures |
| Kubernetes | Where do the processes run? | Pods, scaling, restarts |

Complementary, not competing: keep your agents and tools, add the layer that runs the plan.

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# Engine or Framework?

**Reach for an orchestration engine when:**

- Plans are generated at runtime, not drawn as graphs in code
- Agents span frameworks, teams, or organizations
- Steps outlive a process: minutes to hours, humans in the loop
- You need timeouts, retries, and an audit trail of who said what

**Stay with your framework when:**

- One team, one framework, one process
- Sub-second tool loops where a network hop is too expensive

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# Today and Next

<style scoped>
table.cols { width: 100%; font-size: 0.9em; border-collapse: separate; border-spacing: 24px 0; margin: 0 -24px; }
table.cols td { width: 50%; vertical-align: top; padding: 8px 22px 4px 22px; border-radius: 12px; }
table.cols h3 { font-size: 1.05em; font-weight: 700; margin: 6px 0 12px 0; }
table.cols ul { margin: 0; padding-left: 1.2em; }
table.cols li { margin-bottom: 0.5em; }
td.today { background-color: #1e1e1e; border: 1px solid #2a2a2a; border-top: 4px solid #00d4ff; }
td.today h3 { color: #00d4ff; }
td.next { background-color: #1e1e1e; border: 1px solid #2a2a2a; border-top: 4px solid #f59e0b; }
td.next h3 { color: #f59e0b; }
</style>

<table class="cols"><tr>
<td class="today">
<h3>Works today</h3>
<ul>
<li>AMTP gateway, DNS discovery</li>
<li>Domain signatures</li>
<li>Parallel, sequential, conditional</li>
<li>Timeouts, failures, idempotent steps</li>
<li>Conditions: <code>key == value</code></li>
<li>Results returned to the sender</li>
</ul>
</td>
<td class="next">
<h3>Coming next</h3>
<ul>
<li>Context shared between agents</li>
<li>Context Graph</li>
<li>Composite plans</li>
<li>WASM plugins</li>
</ul>
</td>
</tr></table>

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

# Key Takeaways

- AI planners produce workflows at runtime, static DAG engines cannot run them
- Treat the workflow as **data on a message**: parallel, sequential, conditional
- Borrow from email: `agent@domain`, DNS discovery, store and forward, signed domains
- Keep state, timeouts, and retries in the gateway, not in a context window
- Next frontier: context shared between agents automatically

> *Frameworks build agents. Protocols connect them. Agentry runs the work between them.*

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>

---

<!-- _class: lead -->
# Questions?

Gateway: [github.com/amtp-protocol/agentry](https://github.com/amtp-protocol/agentry)
Protocol: [github.com/amtp-protocol/amtp](https://github.com/amtp-protocol/amtp)
Contact: [cwang@agentry.site](mailto:cwang@agentry.site)

Apache 2.0, contributions welcome.

<img src="images/agentry-logo.png" class="logo">
<div class="bg-pattern"></div>
<div class="footer">Agentry, Inc.</div>
