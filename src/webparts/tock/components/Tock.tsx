import * as React from 'react';
import {Chat, ThemeProvider, TockContext, createTheme} from 'tock-react-kit';
import styles from './Tock.module.scss';
import {ITockProps} from './ITockProps';

const theme = {
  palette: {
    text: {
      user: 'black',
      bot: 'black',
      card: 'black',
      input: 'black',
    },
    background: {
      user: '#5EB0E5',
      bot: 'white',
      card: 'white',
      input: 'white',
      inputDisabled: '#b6b4b4',
    },
  },
  sizing: {
    loaderSize: '8px',
    borderRadius: '15px',
    // conversation: {
    //   width: '720px',
    // },
  },
  typography: {
    fontFamily: 'Lucida Grande',
    fontSize: '16px',
  },
  overrides: {
    chat: `position: relative;`,
    chatInput: {
      icon: `
      & > svg {
          top: 0;
          fill: #5EB0E5;
          &:hover {
              fill: #F9F6EF;
              stroke: #5EB0E5;
          }
      }
      `,
    },
    quickReply: `
    background: white;
    color: black;
    border: solid 2px #5EB0E5;

    &:focus,
    &.focus {
      box-shadow: none;
    }

    &:hover,
    &:active {
      background: #5EB0E5;
    }`,
  },

};

const Tock: (props: ITockProps) => JSX.Element = ({context, endpoint}: ITockProps) => {
  // const unknownUser = {
  //   user: context.pageContext.user.displayName,
  // };
  // const [user, setUser] = useState(unknownUser);

  return (
    <div className={styles.tock}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <ThemeProvider theme={createTheme(theme)}>
              <TockContext>
                <Chat endPoint={endpoint}/>
              </TockContext>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tock;
