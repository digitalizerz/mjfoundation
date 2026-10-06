import { roles } from "@/content/site";

export function RoleStrip() {
  return (
    <ul className="role-strip" aria-label="Mike James">
      {roles.map((role) => (
        <li key={role}>{role}</li>
      ))}
    </ul>
  );
}
