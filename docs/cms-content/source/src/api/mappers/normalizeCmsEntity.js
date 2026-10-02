export function normalizeCmsEntity(entity) {
  if (!entity || typeof entity !== "object") return entity;
  if (entity.attributes && typeof entity.attributes === "object") {
    return { id: entity.id ?? entity.attributes.id, ...entity.attributes };
  }
  return entity;
}

export function normalizeCmsCollection(payload) {
  const items = Array.isArray(payload) ? payload : payload?.data;
  return Array.isArray(items) ? items.map(normalizeCmsEntity) : [];
}
