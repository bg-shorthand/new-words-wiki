import Heading from '@atoms/heading/Heading';
import Paragraph from '@atoms/paragraph/Paragraph';
import Content from '@containers/content/Content';
import MainLayout from '@templates/mainLayout/MainLayout';

const Main = () => {
  return (
    <MainLayout>
      <Content fitContent alignSelf="center">
        <Heading level={2}>Hello! Here is Main</Heading>
      </Content>
      <Content>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus iste aliquam odio
          quasi minima repellendus veritatis dolores, maxime modi recusandae qui omnis dignissimos
          et perferendis suscipit nemo, aut porro facere. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Soluta iusto dolores, facere esse totam, quasi libero officiis incidunt,
          commodi molestias nam aspernatur veniam ab. Similique eius quos porro cumque sunt. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Eligendi deleniti facere fugit sunt
          perspiciatis libero id, vitae aut sapiente delectus saepe incidunt non veniam voluptas
          adipisci, sit, ducimus possimus corrupti? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Cumque iure magnam quibusdam molestiae atque, error nihil fugit
          reprehenderit deleniti, consequuntur dolore sed quo provident distinctio possimus dicta.
          Maxime, ducimus placeat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
          numquam sit nisi rerum nemo, deserunt officia dolorum sint magni illo doloribus? Deleniti,
          ea repudiandae dicta reiciendis nemo facilis omnis tenetur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facere dolorum, placeat nihil suscipit minima possimus magni
          ducimus. Ex deserunt, aperiam quas dicta laborum accusantium delectus assumenda labore,
          ducimus est nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe
          ratione recusandae laboriosam, corporis quo, voluptate, sequi quasi ipsam molestias sit
          eaque qui illo. Corporis facilis labore quod? Non, aperiam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Ex voluptatibus tempore doloremque, porro, deserunt
          consectetur possimus dignissimos commodi ratione esse reprehenderit voluptate repellat
          ipsum distinctio ea quas, assumenda perferendis aliquid!
        </Paragraph>
      </Content>
    </MainLayout>
  );
};

export default Main;
