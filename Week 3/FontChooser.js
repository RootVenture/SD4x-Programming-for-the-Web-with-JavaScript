class FontChooser extends React.Component {
  constructor(props) {
    super(props);
    var min = this.props.min > 1 ? parseInt(this.props.min) : 1;
    var max = parseInt(this.props.max);
    var size = parseInt(this.props.size);
    if (min > max) [min, max] = [max, min];
    if (size < min) size = min;
    if (size > max) size = max;
    var startSize = size;
    this.state = {
      isBold: this.props.bold == "true",
      min: min,
      max: max,
      isHidden: true,
      startSize: size,
      size: parseInt(size)
    };
  }

  toggle() {
    this.setState({ isHidden: !this.state.isHidden });
    var forms = document.getElementsByClassName("show");

    // document.querySelector("#boldCheckbox").hidden = this.state.isHidden;
    // document.querySelector("#decreaseButton").hidden = this.state.isHidden;
    // document.querySelector("#increaseButton").hidden = this.state.isHidden;
    // document.querySelector("#fontSizeSpan").hidden = this.state.isHidden;
    for (let form of forms) {
      form.hidden = this.state.isHidden;
    }
  }

  ChangeCheckbox() {
    this.setState({ isBold: !this.state.isBold });
  }

  increase() {
    if (this.state.size < this.state.max) {
      console.log(this.state.size);
      this.setState({ size: this.state.size + 1 });
    }
  }

  decrease() {
    if (this.state.size > this.state.min) {
      console.log(this.state.size);
      this.setState({ size: this.state.size - 1 });
    }
  }

  reset() {
    this.setState({
      size: this.state.startSize
    });
  }

  render() {
    var isBold = this.state.isBold ? "bold" : "normal";
    var color =
      this.state.size == this.state.min || this.state.size == this.state.max
        ? "red"
        : "black";
    var styles = {
      color: color,
      fontWeight: isBold,
      fontSize: this.state.size
    };
    return (
      <div>
        <input
          className="show"
          type="checkbox"
          id="boldCheckbox"
          hidden="true"
          checked={this.state.isBold}
          onChange={this.ChangeCheckbox.bind(this)}
        />
        <button
          className="show"
          id="decreaseButton"
          hidden="true"
          onClick={this.decrease.bind(this)}
        >
          -
        </button>
        <span
          className="show"
          id="fontSizeSpan"
          hidden="true"
          onDoubleClick={this.reset.bind(this)}
        >
          {this.state.size}
        </span>
        <button
          className="show"
          id="increaseButton"
          hidden="true"
          onClick={this.increase.bind(this)}
        >
          +
        </button>
        <span id="textSpan" style={styles} onClick={this.toggle.bind(this)}>
          {this.props.text}
        </span>
      </div>
    );
  }
}
