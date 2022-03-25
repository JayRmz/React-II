import Link from "next/link";


function NewsPage() {
    return (
        <>
            <h1>The New News Page</h1>
            <ul>
                <li><Link href="/news/nextjs">NextJS</Link></li>
                <li><Link href="/news/reactjs">ReactJS</Link></li>

            </ul>
        </>
    )
};

export default NewsPage;