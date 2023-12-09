import { Form, useNavigation } from "@remix-run/react";

export default function NewNote() {
  const navigation = useNavigation();
  const isSubmitting: boolean = navigation.state === 'submitting';

  return (
    // like in react we do onSubmit={submitHandler} and submitHandler function will prevent the event.preventDefault
    // no need for this in remix
    // also no need to define the action='/notes' because the request will be send to the current active path and this component
    // will be run on /notes path
    <Form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows={5} required />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Add Note'}
        </button>
      </div>
    </Form>
  );
}
