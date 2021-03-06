import React from 'react';
import { connect } from 'react-redux';
import Checkbox from './Checkbox';
import PlaylistSummary from './PlaylistSummary';

export class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.playlist ? props.playlist.description : '',
      lists: props.playlist ? props.playlist.lists : [],
      error: ''
    };
  }
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAddLists = list => {
    this.setState(prevState => ({
      lists: prevState.lists.concat(list)
    }));
  };
  onRemoveLists = list => {
    this.setState(prevState => ({
      lists: prevState.lists.filter(sl => sl !== list)
    }));
  };
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || this.state.lists.length === 0) {
      this.setState(() => ({
        error: 'กรุณาใส่ชื่อรายการและเลือกบทสวดมนต์'
      }));
    } else {
      this.setState(() => ({
        error: ''
      }));
      this.props.onSubmit({
        description: this.state.description,
        lists: this.state.lists
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="ชื่อรายการ"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <PlaylistSummary playlist={this.state} />
        {this.props.transPrayers.map((transPrayer, index) => (
          <Checkbox
            key={index}
            {...transPrayer}
            lists={this.state.lists}
            onAddLists={this.onAddLists}
            onRemoveLists={this.onRemoveLists}
          />
        ))}
        <div>
          <button className="button form-button">เพิ่มรายการ</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  transPrayers: state.transPrayers
});

export default connect(mapStateToProps)(PlaylistForm);
