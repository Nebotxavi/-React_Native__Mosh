import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/listItem/ListItem";
import AppScreen from "../components/appScreen/AppScreen";
import ListItemSeparator from "../components/listItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "../components/listItemDeleteAction/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat sed ante eu venenatis. Nullam nec lectus leo. Sed lacinia est at felis lobortis sodales. Nulla sed lorem tincidunt, cursus enim et, bibendum leo. Fusce luctus enim quis diam posuere pharetra. Duis ante velit, sodales nec sodales a, semper ac lacus. Curabitur commodo quam at eros sodales tristique. In feugiat ornare mauris, at congue est porta eu. Pellentesque vulputate tempus enim, at consectetur lorem. Quisque aliquet ornare sapien luctus ultricies. Pellentesque ultricies interdum dolor, in placerat elit eleifend ac. Vestibulum ac lobortis nisi. Mauris ac nibh volutpat, porta metus in, tristique magna. Quisque ac efficitur lorem. Vivamus magna arcu, scelerisque rhoncus nulla sit amet, consectetur feugiat justo. Mauris elementum, mauris id euismod feugiat, enim purus pulvinar est, a fermentum metus ex quis justo. Maecenas accumsan imperdiet bibendum. Mauris euismod fringilla augue sed elementum. Cras tempus, nulla at tempus placerat, arcu justo convallis nibh, et facilisis eros tellus in nibh. Fusce vitae eros id velit facilisis mattis. Nam porta mollis tempor. Aenean diam velit, malesuada quis faucibus sit amet, aliquet ac risus. Proin viverra turpis a mi vulputate, at venenatis sem auctor.Nulla in porttitor tortor, nec condimentum mi. Etiam in dictum eros. Pellentesque aliquet vehicula lacinia. Nunc nisl tortor, viverra sit amet elit eu, tempus venenatis nunc. Sed interdum arcu eget aliquet vulputate. Nullam at erat eu justo fermentum fringilla. Proin dignissim mi vitae hendrerit euismod. Etiam iaculis leo nec sapien auctor tincidunt. Cras congue tortor non venenatis pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent dignissim diam nec nulla semper dapibus. Aenean diam justo, aliquam quis feugiat vitae, suscipit nec mi. Aliquam interdum finibus quam in condimentum. Proin a ex viverra, dignissim ligula in, mollis est. Maecenas posuere consequat viverra. Suspendisse quis euismod arcu, nec pretium erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam rhoncus, ipsum in congue imperdiet, nunc eros vulputate nulla, ac accumsan mauris lectus a ipsum. Pellentesque accumsan ipsum ut consequat molestie. Maecenas posuere est non arcu convallis aliquet.",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat sed ante eu venenatis. Nullam nec lectus leo. Sed lacinia est at felis lobortis sodales. Nulla sed lorem tincidunt, cursus enim et, bibendum leo. Fusce luctus enim quis diam posuere pharetra. Duis ante velit, sodales nec sodales a, semper ac lacus. Curabitur commodo quam at eros sodales tristique. In feugiat ornare mauris, at congue est porta eu. Pellentesque vulputate tempus enim, at consectetur lorem. Quisque aliquet ornare sapien luctus ultricies. Pellentesque ultricies interdum dolor, in placerat elit eleifend ac. Vestibulum ac lobortis nisi. Mauris ac nibh volutpat, porta metus in, tristique magna. Quisque ac efficitur lorem. Vivamus magna arcu, scelerisque rhoncus nulla sit amet, consectetur feugiat justo. Mauris elementum, mauris id euismod feugiat, enim purus pulvinar est, a fermentum metus ex quis justo. Maecenas accumsan imperdiet bibendum. Mauris euismod fringilla augue sed elementum. Cras tempus, nulla at tempus placerat, arcu justo convallis nibh, et facilisis eros tellus in nibh. Fusce vitae eros id velit facilisis mattis. Nam porta mollis tempor. Aenean diam velit, malesuada quis faucibus sit amet, aliquet ac risus. Proin viverra turpis a mi vulputate, at venenatis sem auctor.Nulla in porttitor tortor, nec condimentum mi. Etiam in dictum eros. Pellentesque aliquet vehicula lacinia. Nunc nisl tortor, viverra sit amet elit eu, tempus venenatis nunc. Sed interdum arcu eget aliquet vulputate. Nullam at erat eu justo fermentum fringilla. Proin dignissim mi vitae hendrerit euismod. Etiam iaculis leo nec sapien auctor tincidunt. Cras congue tortor non venenatis pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent dignissim diam nec nulla semper dapibus. Aenean diam justo, aliquam quis feugiat vitae, suscipit nec mi. Aliquam interdum finibus quam in condimentum. Proin a ex viverra, dignissim ligula in, mollis est. Maecenas posuere consequat viverra. Suspendisse quis euismod arcu, nec pretium erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam rhoncus, ipsum in congue imperdiet, nunc eros vulputate nulla, ac accumsan mauris lectus a ipsum. Pellentesque accumsan ipsum ut consequat molestie. Maecenas posuere est non arcu convallis aliquet.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3.1",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
            showChevrons
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([...initialMessages]);
        }}
      />
    </AppScreen>
  );
}

export default MessagesScreen;
