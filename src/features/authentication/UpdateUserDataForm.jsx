import { useState } from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUser } from "./useUser";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import { useUpdateUser } from "./useUpdateUser";
import styled from "styled-components";


const MAX_IMG_SIZE = 500 * 1024;

const ErrPara = styled.p`
  color: red;
`


function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser() || {};
  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName ?? "");
  const [avatar, setAvatar] = useState(null);

  const [imgError, setImgError] = useState('')

  const handleAvatarChange = evnt => {
    const selectedImg = evnt.target.files[0];

    if (!selectedImg) return;


    if (selectedImg.size > MAX_IMG_SIZE) {
      setImgError('Image size must be maximum 500KB');
      evnt.target.value = "";
      return;
    }

    setImgError(
      ""
    );
    setAvatar(selectedImg)

  }

  const handleSubmit = (evnt) => {
    evnt.preventDefault();

    if (!fullName || imgError) return;



    updateUser(
      { fullName, ...(avatar && { avatar }) },
      {
        onSuccess: () => {
          setAvatar(null);
          evnt.target.reset();
        },
      }
    );
  };

  const handleCancel = () => {
    setFullName(currentFullName);
    setAvatar(null);
  };

  return (
    <Form type="regular" onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          id="fullName"
          disabled={isUpdating}
          value={fullName}
          onChange={(evnt) => setFullName(evnt.target.value)}
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          disabled={isUpdating}
          onChange={handleAvatarChange}
        />
      </FormRow>
      {imgError && <ErrPara>{imgError}</ErrPara>}
      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          size="medium"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button variation="primary" size="medium" disabled={isUpdating}>
          Update account
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
