import { useState } from "react";
import {
  ResourceHeader,
  ResourceTable,
} from "@devxcrew/react-ui/blocks/resource-view";
import { Button } from "@devxcrew/react-ui/components/button";
import { ResourceExampleForm } from "./resource-example-form";

export function ResourceContractExample() {
  const [records, setRecords] = useState([
    { id: "north", name: "North workspace" },
  ]);
  const [selected, setSelected] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);


  const record = records.find((item) => item.id === selected);
  function edit(id: string | null) {
    setSelected(id);


    setEditing(true);
  }
  return (
    <section className="mt-8 grid gap-4 border-t pt-6">
      <ResourceHeader
        title="Resource contract example"
        action={
          !editing && <Button onClick={() => edit(null)}>Create example</Button>
        }
      />
      <p className="text-sm text-muted-foreground">
        Presentation example only. Cxsun verifies persistence and authorization
        through its live APIs.
      </p>
      {editing ? (
        <ResourceExampleForm initialName={record?.name ?? ""} existingNames={records.filter(item => item.id !== selected).map(item => item.name)} onCancel={() => setEditing(false)} onSave={name => {
          setRecords(current => selected ? current.map(item => item.id === selected ? {...item,name} : item) : [...current,{id:crypto.randomUUID(),name}]);
          setEditing(false);
          setSelected(null);
        }}/>
      ) : record ? (
        <>
          <h2 className="text-lg font-medium">{record.name}</h2>
          <div className="flex gap-2">
            <Button onClick={() => edit(record.id)}>Edit</Button>
            <Button variant="outline" onClick={() => setSelected(null)}>
              Back to list
            </Button>
          </div>
        </>
      ) : (
        <ResourceTable
          title="Example workspaces"
          records={records}
          getKey={(item) => item.id}
          columns={[{ id: "name", label: "Name", render: (item) => item.name }]}
          actions={(item) => (
            <Button variant="ghost" onClick={() => setSelected(item.id)}>
              Details
            </Button>
          )}
        />
      )}
    </section>
  );
}
