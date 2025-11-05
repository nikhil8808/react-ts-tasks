import { Form } from "@remix-run/react"
import {useTransition} from "react"

export default function Welcome() {
   const transition = useTransition();
  const pending = transition.state === "submitting";

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <Form method="post">
        <input type="text" name="name" placeholder="Enter Name" />
        <button type="submit" disabled={pending}>
          {pending ? "Submitting" : "Submit"}
        </button>
      </Form>
    </main>
  );
}
