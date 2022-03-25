import MeetupList from '../components/meetups/MeetupList';

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
    return <MeetupList meetups={meetups} />
}

export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    // Fetch API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
};

// export async function getStaticProps() {
//     // fetch data from an API

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 10
//     };
// };

export default HomePage;