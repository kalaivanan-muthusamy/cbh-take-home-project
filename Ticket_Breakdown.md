# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


### Ticket 1: Update the `Agents` table to include custom Agend ID
#### Description
Currently, the `Agents` table do not have a column to store custom id for Agents. To implement the ability for Facilities to save their own custom id for each Agent, we need to update the `Agents` table

#### Implementation Details
- Modify the `Agents` table to include a new column called `customId` to store the custom id for Agents. This field should accept string values considering the Facilities will provide custom id in Alphanumeric. And the limit for the string should be maximum of 16 characters
- Write a database migration script to apply the schema changes to the existing database
- Since this is a new filed, fill the default value as existing internal id

#### Acceptence Criteria
- The Agents table includes a new column called `customId` to store custom id for Agents
- The database migration script successfully updates the schema for existing databases
- Existing table records should have `customId` value as internal id

#### Efforts Estimate
- 2 Hours

### Ticket 2: Update Shift retrieval function

#### Description:
To utilize the custom id of Agents in generating reports, we need to update the `getShiftsByFacility` function to retrieve the custom id associated with each Agent. This will enable us to include the custom id in the generated reports for Facilities

#### Implementation Details:
- Modify the `getShiftsByFacility` function to fetch the custom id of Agents along with other metadata about the Agent assigned to each Shift.This can be done by joining the Agents table with the Shifts table based on the Agent id
- Update the response format of the `getShiftsByFacility` function to include the custom id of Agents

#### Acceptance Criteria:
- The `getShiftsByFacility` function retrieves the custom id of Agents along with other metadata about the Agent assigned to each Shift.
- The response format of the `getShiftsByFacility` function includes the custom ids of Agents

#### Efforts Estimate
- 3 Hours

### Ticket 3: Update report generation with custom Agent id
#### Description:
To include custom Agent id in the generated reports, we need to update the `generateReport` function. The function should use the custom id provided by the Facility instead of internal database id

#### Implementation Details:
- Modify the `generateReport` function to utilize the custom id of Agents instead of the internal database id
- Update the PDF generation logic in the `generateReport` function to include the custom id in the generated reports

#### Acceptance Criteria:
- The `generateReport` function uses the custom ids of Agents provided by the Facility instead of the internal database ids
- The generated reports include the custom ids of Agents
#### Efforts Estimate

- 3 Hours

### Ticket 4: Update report generation with custom Agent id
#### Description:
To allow Facilities to save and manage custom id for Agents, we need to update the user interface in the Facilities section of the platform. This will enable Facilities to add and update custom ids for the Agents they work with

#### Implementation Details:
- Modify the Add and Edit Agent view for Facilities to include new field named "Custom ID"
- The new field should accept Alphanumeric values and the max length should be 16 characters
- The Custom ID field is a required field

#### Acceptance Criteria:
- Facilities can use the Agents view to add and update custom id of the agents
- The new Custom ID field accept Alphanumeric values and the maximum allowed character is 16
- The new Custom ID field is a mandatory field

#### Efforts Estimate
- 6 Hours

### Ticket 5: Testing and Documentation
#### Description:
To ensure the new feature is well-documented and thoroughly tested, we need to update the relevant documentation and perform testing

#### Implementation Details:
- Update the documentation to include information about how Facilities can save their own custom ids for Agents. This should cover the process, any limitations, and any relevant user instructions
- Write unit tests for the modified functions (getShiftsByFacility, generateReport) to verify that the custom Agent ids are retrieved correctly and included in the reports
- Perform integration testing to ensure the new user interface for managing custom Agent ids functions as expected and updates the database correctly

#### Acceptance Criteria:
- The documentation includes clear instructions on how Facilities can save their own custom ids for Agents
- The unit tests for the modified functions pass successfully, ensuring the retrieval and inclusion of custom Agent ids in the reports
- The integration testing confirms that the user interface for managing custom Agent ids functions correctly and updates the database accurately

#### Efforts Estimate
- 4 Hours
