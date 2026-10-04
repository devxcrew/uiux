import { useForm } from '@tanstack/react-form';
import { useState } from 'react';
import { Button } from '@devxcrew/react-ui/components/button';
import { Input } from '@devxcrew/react-ui/components/input';
import { ResourceFeedback } from '@devxcrew/react-ui/blocks/resource-view';
import { resourceExampleSchema, validateExampleSave } from './resource-example.schema';

export function ResourceExampleForm({initialName,existingNames,onSave,onCancel}:{initialName:string;existingNames:readonly string[];onSave(name:string):void;onCancel():void}) {
  const [serverError,setServerError] = useState('');
  const form = useForm({defaultValues:{name:initialName},validators:{onSubmit:resourceExampleSchema},onSubmit:async ({value}) => {
    setServerError('');
    const result = validateExampleSave(value,existingNames);
    if (!result.ok) {setServerError(result.fields.name);return;}
    onSave(result.data.name);
  }});
  return <form className="grid max-w-sm gap-3" onSubmit={event => {event.preventDefault();void form.handleSubmit();}}>
    <form.Field name="name">{field => {
      const error = serverError || field.state.meta.errors.map(error => typeof error === 'string' ? error : error?.message).filter(Boolean).join(' ');
      return <div className="grid gap-2"><label htmlFor="example-resource-name">Name</label><Input id="example-resource-name" value={field.state.value} onBlur={field.handleBlur} onChange={event => {setServerError('');field.handleChange(event.target.value);}} aria-invalid={Boolean(error)} aria-describedby={error ? 'example-resource-name-error' : undefined}/>{error && <p id="example-resource-name-error" role="alert">{error}</p>}</div>;
    }}</form.Field>
    <form.Subscribe >{(state: {isSubmitting:boolean}) => <><ResourceFeedback loading={state.isSubmitting}/><div className="flex gap-2"><Button type="submit" disabled={state.isSubmitting}>{state.isSubmitting?'Saving…':'Save'}</Button><Button type="button" variant="outline" disabled={state.isSubmitting} onClick={onCancel}>Cancel</Button></div></>}</form.Subscribe>
  </form>;
}
