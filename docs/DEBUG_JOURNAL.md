# Debug Journal

Complete one entry per bug. All six entries are required for full marks.

---

## Bug 1 — Silent RLS Block

| Field | Your Entry |
|------|------------|
| **Symptom** | The dashboard table displays **“Empty table”** even though there are **5 rows of data in the `shipments` table** in the Supabase database. |
| **Hypothesis** | RLS policy exists for the `shipments` table, but there is **no policy allowing the `anon` role to read data** from the table. |
| **AI Prompt** | I am a software engineer intern currently studying **Next.js and Supabase**. I received a technical assessment where my task is to **read a codebase cold, diagnose six live bugs, fix them, and document the debugging process exactly as in a real incident report**. In this case study, I need to resolve all six bugs reported in the OA before implementing new features. I already sent you two files: `README.md` (documentation explaining the task) and `legacy_setup.sql` (SQL schema that must be imported into Supabase). |
| **Fix** | Added an **RLS SELECT policy for the `anon` role** on the `shipments` table so the dashboard can read and display shipment data from Supabase. |

---

## Bug 2 — Ghost Mutation

| Field | Your Entry |
|------|------------|
| **Symptom** | - Changing a shipment status shows a **success toast notification**. <br> - After refreshing the page, the shipment status **returns to its original value**. <br> - Inspecting the `shipments` table in Supabase shows **no rows were updated**. |
| **Hypothesis** | - Supabase update query might **not execute correctly**. <br> - The server action might **return success before the database mutation completes**. <br> - The update query might **not target the correct row**. <br> - The database might **reject the update due to constraints or triggers**. |
| **AI Prompt** | Moving on to **Bug #2**, where the root cause is that the shipment status does not change when updated via a server action. Please explain how to properly debug this issue and what steps should be taken. Why does adding `await` allow the change to occur, while removing `await` causes the status to remain unchanged? |
| **Fix** | Added `await` to ensure the **database mutation completes before returning a success response**. |

---

## Bug 3 — Infinite Loop

| Field | Your Entry |
|------|------------|
| **Symptom** | |
| **Hypothesis** | |
| **AI Prompt** | |
| **Fix** | |

---

## Bug 4 — The Invisible Cargo

| Field | Your Entry |
|------|------------|
| **Symptom** | |
| **Hypothesis** | |
| **AI Prompt** | |
| **Fix** | |

---

## Bug 5 — The Unreliable Search

| Field | Your Entry |
|------|------------|
| **Symptom** | |
| **Hypothesis** | |
| **AI Prompt** | |
| **Fix** | |

---

## Bug 6 — The Persistent Ghost

| Field | Your Entry |
|------|------------|
| **Symptom** | |
| **Hypothesis** | |
| **AI Prompt** | |
| **Fix** | |