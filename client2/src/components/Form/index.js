import FormUI from "./FormsUI";

export default function Form () {
   
    const handleSubmit = (values) => {
        console.log(values)

        // fetch a la bases
    }

    return < FormUI onSubmit={handleSubmit}/>
}