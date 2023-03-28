# StripHeadings

⛸ Strips Markdown headings! 🏹

<br>

### ✨ Install

<br>

Install it by running:

```shell
npm i "@igor.dvlpr/strip-headings"
```

<br>
<br>

### 🕵🏼‍♂️ Usage

<br>

```ts
function stripHeadings(value: string): string
```

_Strips Markdown headings completely._

`value: string` - the Markdown string to process.

`returns` - the processed string.

<br>

```ts
function stripHeadingsCode(value: string): string
```

_Strips only the Markdown code while keeping the heading text._

`value: string` - the Markdown string to process.

`returns` - the processed string.
