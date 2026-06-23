# Contributing to the documentation

This documentation repository is maintained by the SMBX2 development team, as well as the community! Anyone is able to submit pages they consider useful, or fixes to typos and outdated material on existing pages. For this workflow, we use <b>merge requests</b>.

[Link to the repository](https://gitlab.com/Bluenaxela/smbx2-documentation)

## Step 0: Create an account on gitlab.com

The repository is hosted on [Gitlab](https://gitlab.com/users/sign_in). To make changes on it, you will need an account.

To create an account, follow the link above and create an account either via the "Register now" button or the options below. Verify your account and fill in the post-signup survey by clicking random buttons until it lets you through.

The upcoming steps of this guide assume you to be signed in.

## Step 1: Setting up your fork of the repository

Interaction with the repository happens via forks. Forks are a copy of the documentation that you keep on your account and can edit on your own time. The merge request returns the changes back into the main repository.

Either on the [main page](https://gitlab.com/Bluenaxela/smbx2-documentation) or via the button at the bottom of every docs page, navigate to the button titled "Web IDE" and click it. Gitlab will prompt you to create a fork. After a short delay, the Gitlab web IDE opens in your forked copy of the repository.
You can always access the fork from the "Personal projects" section of your profile.

## Step 2: Making a change

In the web IDE, navigate to the file you wish to change with the explorer on the left. The file will open and allow you to make your changes.

### Adding a file

Via the New file button in the top left, a new file can be created. When adding new files, ensure that they are also added to the index.html file at the root of the directory (near the very bottom). Otherwise, your new file won't show up on the navigation bar.

## Step 3: Creating the merge request

### Committing changes

Once you are done making changes, hit the "Commit" button in the lower left corner. The view will change and allow you to add a commit message, where you can detail the nature of your changes.

The lower buttons default to creating a new branch and starting a merge request. Keep these options as they are and once you are happy with your commit message, use the "Commit" button.

### Creating the request

A new view shows up where you should write a short title and description of your merge request. What have you changed? Was something added? Do you need someone to double-check it?
All merge requests will be reviewed before approval, so give the reviewer an overview over what has changed.

Once you are done, hit "Create merge request" and wait. Usually, reviews are accepted fairly regularly. But if you want to make sure a reviewer sees it, notify the SMBX2 devs in the #smbx2 channel on the codehaus discord chat.

## Additional note: Making another change

To make sure your fork is always up-to-date with the main repository, set up a [Repository Mirror by following this guide](https://docs.gitlab.com/ee/user/project/repository/mirror/index.html).

- Set the Git repository URL to https://gitlab.com/Bluenaxela/smbx2-documentation.git
- Set direction to "Pull"
- Leave the password field empty
- Hit Mirror repository

Once completed, your fork will automatically update with any changes that happen on the main repository and you won't run into the risk of making changes on outdated files.

## Additional note: Updating your merge request if changes are requested

If your change adds new files or changes large chunks of a file, the reviewer might notice something that needs changing before the merge request can go through. If this happens to you, navigate back to the web IDE and select your merge request's created branch from the drop-down in the top left. It's usually called USERNAME-master-patch-SOMENUMBERS. Here, you can once again make changes and commit.

Untick the "Create a new merge request" checkbox this time. Once you commit, the new change will immediately update the merge request. You can notify the reviewer and wait once more. You do not need to create a second merge request.

And that's all! Your changes are soon visible on the documentation page itself. Thank you for helping out.

## Additional note: Local IDE

Using a local IDE over a web IDE requires some knowledge of handling local git clones, but comes with its own benefits. Extensions like "Live Server" for Visual Studio Code can help tremendously with building new pages, as you will be able to run a local server to preview them before committing anything.

With a local copy, the following steps are added to the flow:
- 1.1: Clone your fork of the project in your git client
- 1.2: Download an IDE like Visual Studio Code or Notepad++
- 1.3: Install any extensions you might want
- 3.1: After committing a change, it needs to be pushed to the remote repository. Push to a new branch for every set of changes.
- 3.2: The merge request needs to be created manually.