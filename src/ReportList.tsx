import * as React from 'react'

import ReportListItem from './ReportListItem'

interface Props { }
interface State {
  reports: {}[]
}

export default class ReportList extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = {
      reports: [
        {},
        {},
        {},
      ]
    }
  }

  sortBy(column: string) {
    // tslint:disable-next-line:no-console
    console.log(`Sort by ${column}`)
  }

  render() {
    return (
      <div>
        <h1>Listenansicht der Berichte</h1>
        <div>
          Listenansicht der Berichte
        <table>
            <thead>
              <tr>
                <th onClick={() => this.sortBy('name')}>Name</th>
                <th>Vorschau</th>
                <th onClick={() => this.sortBy('kategorie')}>Kategorie</th>
                <th onClick={() => this.sortBy('kw')}>KW</th>
                <th onClick={() => this.sortBy('status')}>Status</th>
                <th onClick={() => this.sortBy('kommentare')}>Kommentare</th>
                <th onClick={() => this.sortBy('aktion')}>Aktion</th>
              </tr>
            </thead>
            <tbody>
              {this.state.reports.map((report, index) => {
                // tslint:disable-next-line:no-console
                console.log('xxx')
                return <ReportListItem key={index} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
