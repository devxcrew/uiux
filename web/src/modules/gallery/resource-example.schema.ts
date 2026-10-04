import { z } from 'zod';
export const resourceExampleSchema = z.object({name:z.string().trim().min(1,'Enter a name.').max(80,'Use 80 characters or fewer.')});
export type ResourceExampleInput = z.infer<typeof resourceExampleSchema>;
export function validateExampleSave(input: unknown, existingNames: readonly string[]) {
  const result = resourceExampleSchema.safeParse(input);
  if (!result.success) return {ok:false as const, fields:{name:result.error.issues[0]?.message ?? 'Enter a name.'}};
  if (existingNames.some(name => name.toLowerCase() === result.data.name.toLowerCase())) return {ok:false as const,fields:{name:'This name already exists.'}};
  return {ok:true as const,data:result.data};
}
