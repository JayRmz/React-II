import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
    return (
        <MeetupDetail
            image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
            title='A first Mettup'
            description='MeetupDesc'
            address='Some Street 5, Some city' />
    )
};

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
        ]
    }
};

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                title: 'A first Mettup',
                description: 'MeetupDesc',
                id: 'm1',
                address: 'Some Street 5, Some city'
            }
        }
    }
}

export default MeetupDetails;