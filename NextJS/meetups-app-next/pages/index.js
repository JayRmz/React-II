import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';


const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        address: 'Some Address',
        description: 'This is the first meetup'
    },
    {
        id: 'm2',
        title: 'A second Meetup',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        address: 'Some Address',
        description: 'This is the second meetup'
    }
]

function HomePage(props) {
    const { meetups } = props
    return (
        <>
            <Head>
                <title>NextJS Meetups</title>
                <meta name='description' content='Browser a huge list of meetups' />
            </Head>
            <MeetupList meetups={meetups} />
        </>
    )
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     // Fetch API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// };

export async function getStaticProps() {
    // fetch data from an API

    const client = await MongoClient.connect('mongodb+srv://jayramirez:XWFTfQYYjwhtL4JK@cluster0.ex8g7.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()

            }))
        },
        revalidate: 1
    };
};

export default HomePage;