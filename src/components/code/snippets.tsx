import { FiCheck, FiCode, FiCopy } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Snippets({ filteredSnippets, expandedSnippets, toggleSnippet, selectedTag, setSelectedTag, copyToClipboard, copiedSnippetId, setSearchTerm }: any) {
    return (
        <>
            <div className="grid grid-cols-1 gap-8">
                {filteredSnippets?.length > 0 ? (
                    filteredSnippets.map((snippet: any) => (
                        <div
                            key={snippet.id}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div
                                className="p-5 sm:p-6 cursor-pointer"
                                onClick={() => toggleSnippet(snippet.id)}
                            >
                                <div className="flex justify-between items-start gap-3">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <div

                                            >
                                                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                {snippet.title}
                                            </h2>
                                        </div>
                                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                                            {snippet.description}
                                        </p>
                                        <div className="mt-3 flex flex-wrap gap-2 mb-4">
                                            {snippet.tags.map((tag: any) => (
                                                <span
                                                    key={tag}
                                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${selectedTag === tag
                                                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                                                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                                                        }`}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedTag(selectedTag === tag ? null : tag);
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            copyToClipboard(snippet.code, snippet.id);
                                        }}
                                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                                        title="Copy to clipboard"
                                    >
                                        {copiedSnippetId === snippet.id ? (
                                            <FiCheck className="h-5 w-5 text-green-500" />
                                        ) : (
                                            <FiCopy className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>


                                {expandedSnippets[snippet.id] && (
                                    <div
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                                            <div className="relative">
                                                <SyntaxHighlighter
                                                    language={snippet.language}
                                                    style={atomDark}
                                                    customStyle={{
                                                        margin: 0,
                                                        fontSize: '0.875rem',
                                                        background: '#1a1b26',
                                                        borderRadius: '0.5rem',
                                                        padding: '1.5rem',
                                                        overflowX: 'auto'
                                                    }}
                                                    showLineNumbers
                                                >
                                                    {snippet.code}
                                                </SyntaxHighlighter>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-3 text-center py-12">
                        <FiCode className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No snippets found</h3>
                        <p className="mt-1 text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedTag(null);
                            }}
                            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>

        </>
    );
}