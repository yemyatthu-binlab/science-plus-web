import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const LessonList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="title" />
        <TextField source="lessonRoute" />
        <ReferenceField source="unitId" reference="units" />
        <NumberField source="order" />
      </Datagrid>
    </List>
  );
};
