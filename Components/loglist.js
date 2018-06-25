

<Picker
selectedValue={this.state.type}
style={{ height: 50, width: 150 }}
onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
<Picker.Item label="Expenses" value="java" />
<Picker.Item label="Income" value="js" />
</Picker>