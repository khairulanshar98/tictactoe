import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    header: {
      '& > *': {
        margin: theme.spacing(1),
      },
      marginBottom: theme.spacing(3),
    },
    title: {
      display: 'inline',
      paddingLeft: theme.spacing(1),
      fontWeight: 600,
    },
    box: {
      paddingLeft: 0,
      position: 'relative',
      top: '12px',
    },
    red: {
      color: 'red',
    },
    green: {
      color: 'green',
    },
    paper: {
      height: 50,
      width: 50,
      border: '1px solid ',
      backgroundColor: 'rgba(0, 0, 0, 0.12)'
    },
  }),
)

export interface BoardProp {
  reset: () => void
}


const Board = ({ reset }: BoardProp) => {
  const classes = useStyles()
  const [player, setPlayer] = React.useState(true)
  const [winner, setWinner] = React.useState<string>()
  const [boards, setBoards] = React.useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
  const checkVertical = (data: any) => {
    const col0 = data[0][0] + data[1][0] + data[2][0]
    const col1 = data[0][1] + data[1][1] + data[2][1]
    const col2 = data[0][2] + data[1][2] + data[2][2]
    if (col0 === 3 || col1 === 3 || col2 === 3) setWinner('X')
    else if (col0 === -3 || col1 === -3 || col2 === -3) setWinner('O')
  }
  const checkHorizontal = (data: any) => {
    const row0 = data[0][0] + data[0][1] + data[0][2]
    const row1 = data[1][0] + data[1][1] + data[1][2]
    const row2 = data[2][0] + data[2][1] + data[2][2]
    if (row0 === 3 || row1 === 3 || row2 === 3) setWinner('X')
    else if (row0 === -3 || row1 === -3 || row2 === -3) setWinner('O')
  }
  const checkDiagonal = (data: any) => {
    const diag0 = data[0][0] + data[1][1] + data[2][2]
    const diag1 = data[0][2] + data[1][1] + data[2][0]
    if (diag0 === 3 || diag1 === 3) setWinner('X')
    else if (diag0 === -3 || diag1 === -3) setWinner('O')
  }
  const handleClick = (r: number, c: number) => {
    let data = [...boards]
    if (!winner && data[r][c] === 0) {
      data[r][c] = player ? 1 : -1
      setBoards(data)
      checkVertical(data)
      checkHorizontal(data)
      checkDiagonal(data)
      setPlayer(p => !p)
    }
  }

  return (
    <React.StrictMode>
      <header className={classes.header}>
        <Typography role='title' variant='h6' gutterBottom>
          Current Player:
          {
            winner ?
              <></>
              :
              <Typography
                variant='body1'
                gutterBottom
                className={clsx(classes.title, player ? classes.red : classes.green)}
              >
                {player ? 'X' : 'O'}
              </Typography>
          }
        </Typography>
        <Typography role='winner' variant='h6' gutterBottom>
          Winner:
          {
            winner ?
              <Typography
                variant='body1'
                gutterBottom
                className={clsx(classes.title, winner === 'X' ? classes.red : classes.green)}
              >
                {winner}
              </Typography>
              :
              <Typography
                variant='body1'
                gutterBottom
                className={classes.title}
              >
                None
              </Typography>
          }

        </Typography>
        <Button
          variant='contained'
          onClick={reset}
          disabled={!winner}
          color='secondary'
          role='reset'
        >
          Reset
          </Button>
      </header>
      {
        boards.map((board, r) => {
          return (
            <Grid key={`row-${r}`} container justify='center' spacing={0}>
              {board.map((value, c) => (
                <Grid key={`col-${r}-${c}`} item>
                  <Paper
                    role={`box-${r}-${c}`}
                    className={classes.paper}
                    elevation={0}
                    onClick={() => handleClick(r, c)}
                  >
                    <Typography
                      variant='body1'
                      gutterBottom
                      className={clsx(classes.title, classes.box, value === 1 ? classes.red : classes.green)}
                    >
                      {value === 1 ? 'X' : undefined}
                      {value === -1 ? 'O' : undefined}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )
        })
      }



    </React.StrictMode>
  )

}

const App = () => {
  const classes = useStyles()
  const [boardKey, setKey] = React.useState(1)
  const hanldeReset = () => setKey(p => p + 1)
  return (
    <Container maxWidth='sm' className={classes.root}>
      <Board key={boardKey} reset={hanldeReset} />
    </Container>
  )
}

export default App
