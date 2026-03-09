create table audit_logs (
  id uuid primary key default gen_random_uuid(),
  shipment_id uuid not null references shipments(id) on delete cascade,
  old_status text not null,
  new_status text not null,
  changed_at timestamptz default now()
);

create or replace function log_shipment_status_change()
returns trigger as $$
begin
  if OLD.status is distinct from NEW.status then
    insert into audit_logs (
      shipment_id,
      old_status,
      new_status
    )
    values (
      OLD.id,
      OLD.status,
      NEW.status
    );
  end if;

  return NEW;
end;
$$ language plpgsql;

create trigger shipment_status_audit
after update on shipments
for each row
execute function log_shipment_status_change();

alter table audit_logs enable row level security;

create policy "Allow read audit logs"
on audit_logs
for select
to anon
using (true);

create policy "Allow insert audit logs"
on audit_logs
for insert
to anon
with check (true);