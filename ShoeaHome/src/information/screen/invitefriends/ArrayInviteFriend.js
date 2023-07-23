import { useState } from 'react';

const InviteFriends = [
    { id: 1, title: 'Tynisha', message: `+1-300-555-0135`, visible: false, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' },
    { id: 2, title: 'Florencio Dorrance', message: `+1-202-555-0136`, visible: false, image: 'https://assets.website-files.com/6358c412922fda2d15091350/6358c412922fda8a92091372_Image%20(21).png' },
    { id: 3, title: 'Chantal Shellburne', message: `+1-300-555-0119`, visible: false, image: 'https://pbs.twimg.com/media/CJ_k2MYUcAAOZrV?format=jpg&name=medium' },
    { id: 4, title: 'Maryland Winkles', message: `+1-300-555-0161`, visible: false, image: 'https://somvweb.som.umaryland.edu/faculty/Winkles_Jeffrey.jpg' },
    { id: 5, title: 'Rodolfo', message: `+1-300-555-0136`, visible: false, image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Rodolfo_Hern%C3%A1ndez_Su%C3%A1rez.jpg' },
    { id: 6, title: 'Benny Spanbauer', message: `+1-202-555-0167`, visible: false, image: 'https://relounge.club/wp-content/uploads/2023/01/5-Kopie.jpg' },
    { id: 7, title: 'Tyra Dhillion', message: `+1-202-555-0119`, visible: false, image: 'https://xela-react.setproduct.com/a5.png' },
    { id: 8, title: 'Jamel Eusebio', message: `+1-300-555-0171`, visible: false, image: 'https://cdn1.sportngin.com/attachments/roster_player_info/d6bc-128915260/Eusebio_medium.jpg' },
    { id: 9, title: 'Pedro Huard', message: `+1-202-555-0171`, visible: false, image: 'https://barrettsportsmedia.com/wp-content/uploads/2019/05/Brock-Huard-e1557940750664.jpg' },
    { id: 10, title: 'Clinton Mcclure', message: `+1-400-555-0789`, visible: false, image: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Patrick_McClure_with_President_Bill_Clinton_at_a_Major_Fundraising_Event_for_Mission_Australia.jpg' },
    { id: 11, title: 'Marcurol', message: `+1-360-555-2245`, visible: false, image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Emmanuel_Macron_January_2022.jpg' },
    { id: 12, title: 'Cristiano Ronaldo', message: `+1-999-888-7985`, visible: false, image: 'https://media.vov.vn/sites/default/files/styles/large/public/2023-05/ronaldo_al_nassr.jpg' },
    { id: 13, title: 'John David', message: `+1-457-888-4574`, visible: false, image: 'https://m.media-amazon.com/images/M/MV5BOTY4NDcyNDM5OF5BMl5BanBnXkFtZTgwMjk4Mzk0NTM@._V1_.jpg' },
    { id: 14, title: 'Merry charnto', message: `+1-300-545-2555`, visible: false, image: 'https://vtv1.mediacdn.vn/thumb_w/650/2022/4/6/mm2-768x432-164921971932437056607-crop-1649219727959817200312.jpg' },
    { id: 15, title: 'Lisa Harly', message: `+1-300-222-5455`, visible: false, image: 'https://w0.peakpx.com/wallpaper/650/275/HD-wallpaper-lalisa-manoban-blackpink-blackpinkinyourarea-k-pop-korea-lisa-lisa-manoban-thailand-thumbnail.jpg' },
    { id: 16, title: 'Queen Machine', message: `+1-888-444-2323`, visible: false, image: 'https://woovision.dk/wp-content/uploads/2017/08/IMG_8843.jpg' },
];

const InviteYourFriends = () => {
    const [Invite, setInvite] = useState(InviteFriends);

    const refreshImages = () => {
        const refreshedInvite = Invite.map(item => {
            return {
                ...item,
                image: `${item.image}?${Date.now()}`, // Thêm khóa refresh vào URL ảnh
            };
        });

        setInvite(refreshedInvite);
    };

    return { Invite, refreshImages };
};

export default InviteYourFriends;