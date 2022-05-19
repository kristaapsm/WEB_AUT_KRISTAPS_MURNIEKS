import FormPage from "../../pageObjects/FormPage";

describe("Final task", () => {
  beforeEach(() => {
    FormPage.visit();
  });

  it("Check if the form is working", () => {
    cy.fixture("data").then((data) => {
        
      //Set data as set give in the data file
      FormPage.firstName.type(data.firstName);
      FormPage.lastName.type(data.lastName);
      FormPage.emailField.type(data.email);
      FormPage.maleButton.click({ force: true });
      FormPage.mobileNumber.type(data.mobile);
      FormPage.currentAddress.type(data.address);

      //Set dateOfBirth as task specified
      FormPage.dateOfBirthField.click();
      FormPage.dateOfBirthWidgetYear.select("1930");
      FormPage.dateOfBirthWidgetMonth.select("1");
      FormPage.dateOfBirthWidgetDay.click();

      //Choose Subjects and Hobbies as given in the task
      FormPage.subjectsContainer.type("Economics{enter}");
      FormPage.hobbiesMusic.click({ force: true });

      //Upload a picture
      FormPage.uploadPictureButton.selectFile("cypress/files/johndoe.png");

      // Edit City and State
      FormPage.stateField.click();
      FormPage.stateNCR.click();
      FormPage.cityField.click();
      FormPage.cityDelhi.click();

      // Submit the form
      FormPage.submitButton.click();

      // Check if everything contains what It was set to
      FormPage.submitedDataTable.should("contain", data.firstName);
      FormPage.submitedDataTable.should("contain", data.lastName);
      FormPage.submitedDataTable.should("contain", data.email);
      FormPage.submitedDataTable.should("contain", "Male");
      FormPage.submitedDataTable.should("contain", data.mobile);
      FormPage.submitedDataTable.should("contain", "28 January,1930");
      FormPage.submitedDataTable.should("contain", "Economics");
      FormPage.submitedDataTable.should("contain", "Music");
      FormPage.submitedDataTable.should("contain", "johndoe.png");
      FormPage.submitedDataTable.should("contain", data.currentAddress);
      FormPage.submitedDataTable.should("contain", "NCR");
      FormPage.submitedDataTable.should("contain", "Delhi");
    });
  });
});
