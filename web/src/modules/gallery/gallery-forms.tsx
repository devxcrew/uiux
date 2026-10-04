import { Mail, Search } from 'lucide-react'
import { useState } from 'react'
import { Calendar } from '@devxcrew/react-ui/components/calendar'
import { Checkbox } from '@devxcrew/react-ui/components/checkbox'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@devxcrew/react-ui/components/field'
import { Input } from '@devxcrew/react-ui/components/input'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@devxcrew/react-ui/components/input-group'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@devxcrew/react-ui/components/input-otp'
import { Label } from '@devxcrew/react-ui/components/label'
import { NativeSelect, NativeSelectOption } from '@devxcrew/react-ui/components/native-select'
import { RadioGroup, RadioGroupItem } from '@devxcrew/react-ui/components/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@devxcrew/react-ui/components/select'
import { Slider } from '@devxcrew/react-ui/components/slider'
import { Switch } from '@devxcrew/react-ui/components/switch'
import { Textarea } from '@devxcrew/react-ui/components/textarea'
import { Toggle } from '@devxcrew/react-ui/components/toggle'
import { ToggleGroup, ToggleGroupItem } from '@devxcrew/react-ui/components/toggle-group'
import { GalleryCard } from './gallery-card'

export function GalleryForms() {
  const [otp, setOtp] = useState('2026')

  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <GalleryCard
        description="Inputs, labels, field help, and grouped adornments."
        name="Text entry"
      >
        <FieldGroup className="w-full">
          <Field>
            <FieldLabel htmlFor="gallery-email">Email</FieldLabel>
            <Input id="gallery-email" placeholder="name@example.com" />
            <FieldDescription>Used only for this preview.</FieldDescription>
          </Field>
          <InputGroup>
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupInput aria-label="Search components" placeholder="Search components" />
          </InputGroup>
          <Textarea aria-label="Notes" placeholder="Notes" />
        </FieldGroup>
      </GalleryCard>
      <GalleryCard description="Selection controls with accessible labels." name="Selection">
        <div className="w-full space-y-5">
          <div className="flex items-center gap-3">
            <Checkbox id="gallery-check" defaultChecked />
            <Label htmlFor="gallery-check">Enable shared theme</Label>
            <Switch aria-label="Enable preview" defaultChecked />
          </div>
          <RadioGroup defaultValue="web">
            <div className="flex items-center gap-2">
              <RadioGroupItem id="web" value="web" />
              <Label htmlFor="web">Web</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem id="desktop" value="desktop" />
              <Label htmlFor="desktop">Desktop</Label>
            </div>
          </RadioGroup>
          <Slider defaultValue={[64]} max={100} />
          <ToggleGroup defaultValue={['grid']} multiple>
            <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
            <ToggleGroupItem value="list">List</ToggleGroupItem>
          </ToggleGroup>
          <Toggle aria-label="Pin component">Pin</Toggle>
        </div>
      </GalleryCard>
      <GalleryCard description="Native and composed option menus." name="Select menus">
        <div className="grid w-full gap-4">
          <NativeSelect defaultValue="stable">
            <NativeSelectOption value="stable">Stable</NativeSelectOption>
            <NativeSelectOption value="preview">Preview</NativeSelectOption>
          </NativeSelect>
          <Select defaultValue="platform">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="platform">Platform</SelectItem>
              <SelectItem value="docs">Docs</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </GalleryCard>
      <GalleryCard description="One-time-code and date selection controls." name="Structured input">
        <div className="grid justify-items-center gap-5">
          <InputOTP maxLength={4} onChange={setOtp} value={otp}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail size={16} />
            Reusable form composition
          </div>
          <Calendar className="rounded-lg border" mode="single" />
        </div>
      </GalleryCard>
    </div>
  )
}
