import React, { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";
import { getLogs } from "../../actions/logActions";

const Logs = ({ logs = [], loading, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h5 className="center">System Logs</h5>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to display</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

const mapStateToProps = state => ({
  logs: state.log.logs,
  loading: state.log.loading
});

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
