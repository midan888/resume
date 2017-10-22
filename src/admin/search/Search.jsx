import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  componentWillMount() {
    this.props.requestSearchData();
  }

  render() {
    const { admins } = this.props;

    return (
      <div>
        <table>
          <thead>
            <th>
              <td>Email</td>
              <td>First name</td>
              <td>Last name</td>
            </th>
          </thead>
          <tbody>
            {admins.map(admin => (
              <tr>
                <td>{admin.email}</td>
                <td>{admin.firstName}</td>
                <td>{admin.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Search.propTypes = {
  admins: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  })).isRequired,

  requestSearchData: PropTypes.func.isRequired,
};

export default Search;
