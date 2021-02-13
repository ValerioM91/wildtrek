import faker from 'faker';

const data = [
  {
    id: 1,
    name: 'Bilbo Baggins',
    image: faker.image.image(),
    title: 'A Wonderful Adventure',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore fugiat impedit. Repudiandae rem accusamus earum architecto quis molestiae quidem suscipit fugit mollitia cumque ex natus laborum sequi, explicabo dolorem!',
  },
  {
    id: 2,
    name: 'Ned Stark',
    image: faker.image.image(),
    title: 'Visiting the North has been amazing',
    review:
      'Voluptatibus accusamus esse, voluptates, facere ea veniam impedit officiis ipsa nam doloremque eligendi sequi. Labore, aperiam! Atque, voluptas a! Reiciendis, excepturi doloribus?',
  },
  {
    id: 3,
    name: 'Sheldon Cooper',
    image: faker.image.image(),
    title: 'I enjoyed the Train Travel',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore fugiat impedit. Repudiandae rem accusamus earum architecto quis molestiae quidem suscipit fugit mollitia cumque ex natus laborum sequi, explicabo dolorem!',
  },
  {
    id: 4,
    name: 'Eren Yaeger',
    image: faker.image.image(),
    title: 'Titanic Experience',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus eligendi harum deleniti maxime? At eius facere doloribus corporis non eum molestias dicta qui iste tenetur! Natus consequatur similique eaque repellat!',
  },
];

export default data;
