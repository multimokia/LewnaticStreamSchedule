"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DateTime } from "luxon";

interface FormData {
  [k: string]: { date: string, description: string}
}
export function CardInfoForm() {
  const [ numberOfItems, setNumberOfItems ] = useState(1);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data: FormData) => {
    console.log("Data", data);
    //Because html5 datetime-local doesn't respect timezones, we need to convert it to the current timezone. We'll use luxon for this.
    let items = Object.values(data).map((value) => {
      const date = DateTime.fromISO(value.date).toLocal().toISO();
      return {
        startDateTime: date,
        description: value.description,
        offline: false
      };
    });

    // Slice the array to remove any items that are beyond the number of items the user selected
    items = items.slice(0, numberOfItems);

    // Post the data to the server
    fetch("/api/schedule-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ scheduleItems: items })
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

  };

  return (
    <div className="w-full flex flex-col items-center">
      <form>
        <input type="range" min="1" max="7" value={numberOfItems} onChange={(e) => setNumberOfItems(parseInt(e.target.value))} />
        <p>Number of items: {numberOfItems}</p>
      </form>
      <form
        className="
          bg-zinc-700
          rounded-md
          p-6
          space-y-7
          overflow-y-auto
          max-h-[75vh]
          w-4/5
        "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="auto-grid content-center">
          {[...Array(numberOfItems)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-3 bg-zinc-800 rounded-lg">
              <p>Item {i+1}</p>

              <label htmlFor={`item-${i}-date`}>Start time</label>
              <input
                type="datetime-local"
                id={`item-${i}-date`}
                className="p-2 rounded-xl bg-zinc-600"
                {...register(`item-${i}.date`, { required: true })}
              />

              <label htmlFor={`item-${i}-description`}>Description</label>
              <input
                type="text"
                id={`item-${i}-description`}
                placeholder="Enter a description"
                className="p-2 rounded-xl bg-zinc-600"
                {...register(`item-${i}.description`, { required: true })}
              />
            </div>
          ))}
        </div>
        <input type="submit" value="Save" className="p-2 rounded-xl bg-zinc-500 hover:bg-zinc-600 w-full" />
      </form>
    </div>
  );
}
