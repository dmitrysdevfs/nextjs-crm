# dev-digest-conventions

House conventions for `dev-digest`. Flag changes that violate any rule below and cite
the offending `file:line`.

## all-database-tables-must-declare-a
All database tables must declare a UUID primary key with defaultRandom().

Detected in `server/src/db/schema/core.ts:7`:

```ts
  id: uuid('id').primaryKey().defaultRandom(),
```

## all-database-tables-must-use-the
All database tables must use the shared now() helper for created_at columns.

Detected in `server/src/db/schema/_shared.ts:9`:

```ts
export const now = () => timestamp('created_at', { withTimezone: true }).defaultNow().notNull();
```

## all-api-fetch-errors-must-be
All API fetch errors must be normalized to the ApiError class with status and code.

Detected in `client/src/lib/api.ts:8-19`:

```ts
export class ApiError extends Error {
  status: number;
  code?: string;
  details?: unknown;
  constructor(message: string, status: number, code?: string, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}
```

## every-schema-domain-file-must-be
Every schema domain file must be re-exported through server/src/db/schema.ts barrel and included in the schema object.

Detected in `server/src/db/schema.ts:15-16`:

```ts
export * from './schema/core';
export * from './schema/repos';
```

## client-side-component-style-objects-must
Client-side component style objects must be typed with satisfies CSSProperties and closed with as const.

Detected in `client/src/app/repos/[repoId]/pulls/[number]/_components/RunTraceDrawer/styles.ts:12`:

```ts
  } satisfies CSSProperties,
```

## react-query-hooks-must-be-named
React Query hooks must be named useXxx and use a consistent queryKey array (e.g. ["agents"] or ["agent", id]).

Detected in `client/src/lib/hooks/agents.ts:9-10`:

```ts
  return useQuery({
    queryKey: ["agents"],
```

## foreign-key-references-in-database-tables
Foreign key references in database tables must specify onDelete: 'cascade'.

Detected in `server/src/db/schema/core.ts:24`:

```ts
      .references(() => workspaces.id, { onDelete: 'cascade' }),
```

## NEVER
- Never report a violation without a `file:line` from the diff under review.
- Never soften a rule into a suggestion — these are house conventions, not preferences.
