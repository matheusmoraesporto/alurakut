import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
// Usamos o import com as chaves, quando o arquivo não 'export default', ou seja exporta mais de uma função.
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

function ProfileSidebar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  );
}

export default function Home() {
  const githubUser = 'matheusmoraesporto';

  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho'];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((p) => {
                return (
                  <li key={p}>
                    <a href={`/users/${p}`}>
                      <img src={`https://github.com/${p}.png`} />
                      <span>{p}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          {/* <Box>
            Comunidades
          </Box> */}
        </div>
      </MainGrid>
    </>
  );
}
