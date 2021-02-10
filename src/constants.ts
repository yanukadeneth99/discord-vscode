import LANG from './data/languages.json';

export const CLIENT_ID = '383226320970055681' as const;

export const KNOWN_EXTENSIONS: { [key: string]: { image: string } } = LANG.KNOWN_EXTENSIONS;
export const KNOWN_LANGUAGES: { language: string; image: string }[] = LANG.KNOWN_LANGUAGES;

export const EMPTY = '\u200b\u200b';
export const FILE_SIZES = [' bytes', 'kb', 'mb', 'gb', 'tb'];

export const IDLE_IMAGE_KEY = 'vscode-big';
export const DEBUG_IMAGE_KEY = 'debug';
export const VSCODE_IMAGE_KEY = 'vscode';
export const VSCODE_INSIDERS_IMAGE_KEY = 'vscode-insiders';

export const UNKNOWN_GIT_BRANCH = 'Unknown.';
export const UNKNOWN_GIT_REPO_NAME = 'Unknown.';

export const enum REPLACE_KEYS {
	Empty = '{empty}',
	FileName = '{file_name}',
	DirName = '{dir_name}',
	FullDirName = '{full_dir_name}',
	Workspace = '{workspace}',
	WorkspaceFolder = '{workspace_folder}',
	WorkspaceAndFolder = '{workspace_and_folder}',
	LanguageLowerCase = '{lang}',
	LanguageTitleCase = '{Lang}',
	LanguageUpperCase = '{LANG}',
	TotalLines = '{total_lines}',
	CurrentLine = '{current_line}',
	CurrentColumn = '{current_column}',
	FileSize = '{file_size}',
	AppName = '{app_name}',
	GitRepoName = '{git_repo_name}',
	GitBranch = '{git_branch}',
}

export const enum CONFIG_KEYS {
	Enabled = 'enabled',
	DetailsIdling = 'detailsIdling',
	DetailsEditing = 'detailsEditing',
	DetailsDebugging = 'detailsDebugging',
	LowerDetailsIdling = 'lowerDetailsIdling',
	LowerDetailsEditing = 'lowerDetailsEditing',
	LowerDetailsDebugging = 'lowerDetailsDebugging',
	LowerDetailsNoWorkspaceFound = 'lowerDetailsNoWorkspaceFound',
	LargeImageIdling = 'largeImageIdling',
	LargeImage = 'largeImage',
	SmallImage = 'smallImage',
	SuppressNotifications = 'suppressNotifications',
	WorkspaceExcludePatterns = 'workspaceExcludePatterns',
	SwapBigAndSmallImage = 'swapBigAndSmallImage',
}
