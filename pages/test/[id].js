import { useRouter } from "next/router";

export default function Page () {

    const { id } = useRouter().query;

    return (
        <div>
            <h1>Dynamic Page {id}</h1>
            <h1>Test Page</h1>
            <p>This is a test page.</p>
        </div>
    );
}