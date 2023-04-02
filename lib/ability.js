import { Ability, AbilityBuilder } from "@casl/ability";

export default function getUserAbilities(userRolePerms) {
  const { can, build } = new AbilityBuilder(Ability);
  for (const rolePerms of userRolePerms) {
    for (const { actions, subject } of rolePerms.perms || []) {
      for (const action of actions) {
        if (typeof action === "string") {
          can(action, subject);
          continue;
        }
        can(action.type, subject, action?.conditions);
      }
    }
  }
  return build();
}
