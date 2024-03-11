/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSport } from "../graphql/queries";
import { updateSport } from "../graphql/mutations";
const client = generateClient();
export default function SportUpdateForm(props) {
  const {
    id: idProp,
    sport: sportModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    grad: "",
    sport: "",
    position: "",
    height: "",
    weight: "",
    team: "",
    highlight: "",
    Parentname: "",
    Parentemail: "",
    Parentphone: "",
    Coachname: "",
    Coachemail: "",
    Coachphone: "",
    gpa: "",
    test: "",
    image: "",
    author: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [grad, setGrad] = React.useState(initialValues.grad);
  const [sport, setSport] = React.useState(initialValues.sport);
  const [position, setPosition] = React.useState(initialValues.position);
  const [height, setHeight] = React.useState(initialValues.height);
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [team, setTeam] = React.useState(initialValues.team);
  const [highlight, setHighlight] = React.useState(initialValues.highlight);
  const [Parentname, setParentname] = React.useState(initialValues.Parentname);
  const [Parentemail, setParentemail] = React.useState(
    initialValues.Parentemail
  );
  const [Parentphone, setParentphone] = React.useState(
    initialValues.Parentphone
  );
  const [Coachname, setCoachname] = React.useState(initialValues.Coachname);
  const [Coachemail, setCoachemail] = React.useState(initialValues.Coachemail);
  const [Coachphone, setCoachphone] = React.useState(initialValues.Coachphone);
  const [gpa, setGpa] = React.useState(initialValues.gpa);
  const [test, setTest] = React.useState(initialValues.test);
  const [image, setImage] = React.useState(initialValues.image);
  const [author, setAuthor] = React.useState(initialValues.author);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = sportRecord
      ? { ...initialValues, ...sportRecord }
      : initialValues;
    setName(cleanValues.name);
    setGrad(cleanValues.grad);
    setSport(cleanValues.sport);
    setPosition(cleanValues.position);
    setHeight(cleanValues.height);
    setWeight(cleanValues.weight);
    setTeam(cleanValues.team);
    setHighlight(cleanValues.highlight);
    setParentname(cleanValues.Parentname);
    setParentemail(cleanValues.Parentemail);
    setParentphone(cleanValues.Parentphone);
    setCoachname(cleanValues.Coachname);
    setCoachemail(cleanValues.Coachemail);
    setCoachphone(cleanValues.Coachphone);
    setGpa(cleanValues.gpa);
    setTest(cleanValues.test);
    setImage(cleanValues.image);
    setAuthor(cleanValues.author);
    setErrors({});
  };
  const [sportRecord, setSportRecord] = React.useState(sportModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSport.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSport
        : sportModelProp;
      setSportRecord(record);
    };
    queryData();
  }, [idProp, sportModelProp]);
  React.useEffect(resetStateValues, [sportRecord]);
  const validations = {
    name: [],
    grad: [],
    sport: [],
    position: [],
    height: [],
    weight: [],
    team: [],
    highlight: [],
    Parentname: [],
    Parentemail: [],
    Parentphone: [],
    Coachname: [],
    Coachemail: [],
    Coachphone: [],
    gpa: [],
    test: [],
    image: [],
    author: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name: name ?? null,
          grad: grad ?? null,
          sport: sport ?? null,
          position: position ?? null,
          height: height ?? null,
          weight: weight ?? null,
          team: team ?? null,
          highlight: highlight ?? null,
          Parentname: Parentname ?? null,
          Parentemail: Parentemail ?? null,
          Parentphone: Parentphone ?? null,
          Coachname: Coachname ?? null,
          Coachemail: Coachemail ?? null,
          Coachphone: Coachphone ?? null,
          gpa: gpa ?? null,
          test: test ?? null,
          image: image ?? null,
          author: author ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateSport.replaceAll("__typename", ""),
            variables: {
              input: {
                id: sportRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SportUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              grad,
              sport,
              position,
              height,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Grad"
        isRequired={false}
        isReadOnly={false}
        value={grad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad: value,
              sport,
              position,
              height,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.grad ?? value;
          }
          if (errors.grad?.hasError) {
            runValidationTasks("grad", value);
          }
          setGrad(value);
        }}
        onBlur={() => runValidationTasks("grad", grad)}
        errorMessage={errors.grad?.errorMessage}
        hasError={errors.grad?.hasError}
        {...getOverrideProps(overrides, "grad")}
      ></TextField>
      <TextField
        label="Sport"
        isRequired={false}
        isReadOnly={false}
        value={sport}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport: value,
              position,
              height,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.sport ?? value;
          }
          if (errors.sport?.hasError) {
            runValidationTasks("sport", value);
          }
          setSport(value);
        }}
        onBlur={() => runValidationTasks("sport", sport)}
        errorMessage={errors.sport?.errorMessage}
        hasError={errors.sport?.hasError}
        {...getOverrideProps(overrides, "sport")}
      ></TextField>
      <TextField
        label="Position"
        isRequired={false}
        isReadOnly={false}
        value={position}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position: value,
              height,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.position ?? value;
          }
          if (errors.position?.hasError) {
            runValidationTasks("position", value);
          }
          setPosition(value);
        }}
        onBlur={() => runValidationTasks("position", position)}
        errorMessage={errors.position?.errorMessage}
        hasError={errors.position?.hasError}
        {...getOverrideProps(overrides, "position")}
      ></TextField>
      <TextField
        label="Height"
        isRequired={false}
        isReadOnly={false}
        value={height}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height: value,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.height ?? value;
          }
          if (errors.height?.hasError) {
            runValidationTasks("height", value);
          }
          setHeight(value);
        }}
        onBlur={() => runValidationTasks("height", height)}
        errorMessage={errors.height?.errorMessage}
        hasError={errors.height?.hasError}
        {...getOverrideProps(overrides, "height")}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={false}
        isReadOnly={false}
        value={weight}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height,
              weight: value,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks("weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("weight", weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, "weight")}
      ></TextField>
      <TextField
        label="Team"
        isRequired={false}
        isReadOnly={false}
        value={team}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height,
              weight,
              team: value,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.team ?? value;
          }
          if (errors.team?.hasError) {
            runValidationTasks("team", value);
          }
          setTeam(value);
        }}
        onBlur={() => runValidationTasks("team", team)}
        errorMessage={errors.team?.errorMessage}
        hasError={errors.team?.hasError}
        {...getOverrideProps(overrides, "team")}
      ></TextField>
      <TextField
        label="Highlight"
        isRequired={false}
        isReadOnly={false}
        value={highlight}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height,
              weight,
              team,
              highlight: value,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.highlight ?? value;
          }
          if (errors.highlight?.hasError) {
            runValidationTasks("highlight", value);
          }
          setHighlight(value);
        }}
        onBlur={() => runValidationTasks("highlight", highlight)}
        errorMessage={errors.highlight?.errorMessage}
        hasError={errors.highlight?.hasError}
        {...getOverrideProps(overrides, "highlight")}
      ></TextField>
      <TextField
        label="Parentname"
        isRequired={false}
        isReadOnly={false}
        value={Parentname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height,
              weight,
              team,
              highlight,
              Parentname: value,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.Parentname ?? value;
          }
          if (errors.Parentname?.hasError) {
            runValidationTasks("Parentname", value);
          }
          setParentname(value);
        }}
        onBlur={() => runValidationTasks("Parentname", Parentname)}
        errorMessage={errors.Parentname?.errorMessage}
        hasError={errors.Parentname?.hasError}
        {...getOverrideProps(overrides, "Parentname")}
      ></TextField>
      <TextField
        label="Parentemail"
        isRequired={false}
        isReadOnly={false}
        value={Parentemail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail: value,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.Parentemail ?? value;
          }
          if (errors.Parentemail?.hasError) {
            runValidationTasks("Parentemail", value);
          }
          setParentemail(value);
        }}
        onBlur={() => runValidationTasks("Parentemail", Parentemail)}
        errorMessage={errors.Parentemail?.errorMessage}
        hasError={errors.Parentemail?.hasError}
        {...getOverrideProps(overrides, "Parentemail")}
      ></TextField>
      <TextField
        label="Parentphone"
        isRequired={false}
        isReadOnly={false}
        value={Parentphone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone: value,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.Parentphone ?? value;
          }
          if (errors.Parentphone?.hasError) {
            runValidationTasks("Parentphone", value);
          }
          setParentphone(value);
        }}
        onBlur={() => runValidationTasks("Parentphone", Parentphone)}
        errorMessage={errors.Parentphone?.errorMessage}
        hasError={errors.Parentphone?.hasError}
        {...getOverrideProps(overrides, "Parentphone")}
      ></TextField>
      <TextField
        label="Coachname"
        isRequired={false}
        isReadOnly={false}
        value={Coachname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname: value,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.Coachname ?? value;
          }
          if (errors.Coachname?.hasError) {
            runValidationTasks("Coachname", value);
          }
          setCoachname(value);
        }}
        onBlur={() => runValidationTasks("Coachname", Coachname)}
        errorMessage={errors.Coachname?.errorMessage}
        hasError={errors.Coachname?.hasError}
        {...getOverrideProps(overrides, "Coachname")}
      ></TextField>
      <TextField
        label="Coachemail"
        isRequired={false}
        isReadOnly={false}
        value={Coachemail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail: value,
              Coachphone,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.Coachemail ?? value;
          }
          if (errors.Coachemail?.hasError) {
            runValidationTasks("Coachemail", value);
          }
          setCoachemail(value);
        }}
        onBlur={() => runValidationTasks("Coachemail", Coachemail)}
        errorMessage={errors.Coachemail?.errorMessage}
        hasError={errors.Coachemail?.hasError}
        {...getOverrideProps(overrides, "Coachemail")}
      ></TextField>
      <TextField
        label="Coachphone"
        isRequired={false}
        isReadOnly={false}
        value={Coachphone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone: value,
              gpa,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.Coachphone ?? value;
          }
          if (errors.Coachphone?.hasError) {
            runValidationTasks("Coachphone", value);
          }
          setCoachphone(value);
        }}
        onBlur={() => runValidationTasks("Coachphone", Coachphone)}
        errorMessage={errors.Coachphone?.errorMessage}
        hasError={errors.Coachphone?.hasError}
        {...getOverrideProps(overrides, "Coachphone")}
      ></TextField>
      <TextField
        label="Gpa"
        isRequired={false}
        isReadOnly={false}
        value={gpa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa: value,
              test,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.gpa ?? value;
          }
          if (errors.gpa?.hasError) {
            runValidationTasks("gpa", value);
          }
          setGpa(value);
        }}
        onBlur={() => runValidationTasks("gpa", gpa)}
        errorMessage={errors.gpa?.errorMessage}
        hasError={errors.gpa?.hasError}
        {...getOverrideProps(overrides, "gpa")}
      ></TextField>
      <TextField
        label="Test"
        isRequired={false}
        isReadOnly={false}
        value={test}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test: value,
              image,
              author,
            };
            const result = onChange(modelFields);
            value = result?.test ?? value;
          }
          if (errors.test?.hasError) {
            runValidationTasks("test", value);
          }
          setTest(value);
        }}
        onBlur={() => runValidationTasks("test", test)}
        errorMessage={errors.test?.errorMessage}
        hasError={errors.test?.hasError}
        {...getOverrideProps(overrides, "test")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image: value,
              author,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Author"
        isRequired={false}
        isReadOnly={false}
        value={author}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              sport,
              position,
              height,
              weight,
              team,
              highlight,
              Parentname,
              Parentemail,
              Parentphone,
              Coachname,
              Coachemail,
              Coachphone,
              gpa,
              test,
              image,
              author: value,
            };
            const result = onChange(modelFields);
            value = result?.author ?? value;
          }
          if (errors.author?.hasError) {
            runValidationTasks("author", value);
          }
          setAuthor(value);
        }}
        onBlur={() => runValidationTasks("author", author)}
        errorMessage={errors.author?.errorMessage}
        hasError={errors.author?.hasError}
        {...getOverrideProps(overrides, "author")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || sportModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || sportModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
