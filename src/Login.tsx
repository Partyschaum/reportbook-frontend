import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface OwnProps { }
type Props = OwnProps & RouteComponentProps<void>

export default class Login extends React.Component<Props> {
  onClick = () => {
    this.props.history.push('/reports')
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Anmelden</legend>
            <p>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input type="text" id="password" name="password" />
            </p>
            <button onClick={this.onClick}>Login</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
