import React, { useState, useEffect, createContext } from "react";
import useAuth from "../hooks/useAuth";
import usePrivateAxios from "../hooks/usePrivateAxios";
import useLayoutContext from "../hooks/useLayoutContext";

const NotesContext = createContext({});

export function NotesProvider({ children }) {
  const { auth } = useAuth();
  const axiosPrivateApi = usePrivateAxios();
  const { handleOverlayDisplay } = useLayoutContext();

  const [allNotes, setAllNotes] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchDataErr, setFetchDataErr] = useState(false);

  const [noteView, setNoteView] = useState(false); // view note section state:
  const [note, setNote] = useState({ title: "", content: "", tags: [] }); // current note:
  const [isPending, setIsPending] = useState(false);
  const [inputErr, setInputErr] = useState("");
  const [tagInputErr, setTagInputErr] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // fetch data api:
  useEffect(() => {
    const ctrl = new AbortController();
    async function getDataApi() {
      try {
        // 2. make get request api:
        const notesResponse = await axiosPrivateApi.get(
          `/api/notes/${auth?.userId}`,
          {
            signal: ctrl.signal,
          }
        );
        const tagsResponse = await axiosPrivateApi.get(
          `/api/notes/${auth?.userId}/tags`,
          {
            signal: ctrl.signal,
          }
        );
        // 3. set all note to data:
        setAllNotes(notesResponse.data.currentNotes);
        setArchiveNotes(notesResponse.data.archiveNotes);
        setAllTags(tagsResponse.data);
      } catch (err) {
        console.log(err);
        err === "canceled"
          ? setFetchDataErr("")
          : !err?.response
          ? setFetchDataErr({ msg: "server not response" })
          : setFetchDataErr({
              msg: "faild to fetch data!",
              status: err.response.status,
            });
      } finally {
        setTimeout(() => setIsLoading(false), 1500);
      }
    }
    getDataApi();
    // 4. cleanup useEffect;
    return () => ctrl.abort();
  }, []);

  // handle note section view:
  const handleNoteView = React.useCallback(
    (noteId, isArchive) => {
      setNoteView(!noteView);
      handleOverlayDisplay();
      noteId
        ? !isArchive
          ? setNote(allNotes.find((n) => n._id === noteId))
          : setNote(archiveNotes.find((n) => n._id === noteId))
        : setNote({ title: "", content: "", tags: [] });
    },
    [allNotes, archiveNotes]
  );

  const removeTag = (targetIdx) => {
    setNote((prev) => ({
      ...prev,
      tags: prev.tags.filter((t, idx) => idx !== targetIdx),
    }));
  };
  const addNewTag = (inputId) => {
    let tagValue = inputId.current.value;
    tagValue.length < 3 || tagValue.length > 8
      ? setTagInputErr("tag must be between 3 and 8 characters")
      : note?.tags?.length >= 5
      ? setTagInputErr("maximum of 5 tags allowed")
      : note?.tags?.includes(tagValue)
      ? setTagInputErr("tag has been already added!")
      : setNote((prev) => ({
          ...prev,
          tags: prev.tags ? [...prev.tags, tagValue] : [tagValue],
        }));
    inputId.current.value = "";
  };
  const selectTag = (selectId) => {
    let tagValue = selectId.current.value;
    note?.tags?.length >= 5
      ? setInputErr("maximum of 5 tags allowed")
      : note.tags.includes(tagValue)
      ? setInputErr("tag has been already added!")
      : setNote((prev) => ({ ...prev, tags: [...prev.tags, tagValue] }));
  };

  const handleNote = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  // add note request api:
  const saveNoteApi = async (e, noteId, isArchived) => {
    e.preventDefault();
    try {
      setIsPending(true);
      // 1. check if there noteId
      if (!noteId) {
        // 2. make post request api:
        const res = await axiosPrivateApi.post(
          `/api/notes/${auth.userId}`,
          note
        );
        // 3. add new note in allNotes:
        setAllNotes((prev) => [...prev, res.data]);
      } else {
        // 2. make put request api:
        const res = await axiosPrivateApi.put(
          `/api/notes/${auth.userId}/${noteId}`,
          note
        );
        // 3. add new note from response in allNotes or archive:
        isArchived
          ? setArchiveNotes((prev) =>
              prev.map((n) => (n._id === noteId ? res.data : n))
            )
          : setAllNotes((prev) =>
              prev.map((n) => (n._id === noteId ? res.data : n))
            );
      }
      // refresh all tags:
      const tagsResponse = await axiosPrivateApi.get(
        `/api/notes/${auth?.userId}/tags`
      );
      handleNoteView("close");
      setAllTags(tagsResponse.data);
    } catch (err) {
      console.log(err);
      !err?.response
        ? setErrMsg({ msg: "server not response" })
        : setErrMsg({
            msg: "faild to save note!",
            status: err.response.status,
          });
    } finally {
      setIsPending(false);
    }
  };
  // delete note request api:
  const deleteNoteApi = async (noteId, isArchived) => {
    try {
      // 1. make delete request api:
      await axiosPrivateApi.delete(`/api/notes/${auth.userId}/${noteId}`);
      // 2. filter notes by noteId:
      !isArchived
        ? setAllNotes((prev) => prev.filter((n) => n._id !== noteId))
        : setArchiveNotes((prev) => prev.filter((n) => n._id !== noteId));
      // refresh all tags:
      const tagsResponse = await axiosPrivateApi.get(
        `/api/notes/${auth?.userId}/tags`
      );
      setAllTags(tagsResponse.data);
    } catch (err) {
      console.log(err);
      !err?.response
        ? setErrMsg({ msg: "server not response" })
        : setErrMsg({
            msg: "faild to delete note!",
            status: err.response.status,
          });
    }
  };
  // delete all current notes request api:
  const deleteAllNotesApi = async () => {
    try {
      setIsLoading(true);
      // 1. make delete request api:
      await axiosPrivateApi.delete(`/api/notes/${auth.userId}`);
      // 2. filter notes by noteId:
      setAllNotes([]);
      setAllTags([]);
    } catch (err) {
      console.log(err);
      !err?.response
        ? setErrMsg({ msg: "server not response" })
        : setErrMsg({
            msg: "faild to delete all notes!",
            status: err.response.status,
          });
    } finally {
      setIsLoading(false);
    }
  };

  // delete note request api:
  const archiveNoteApi = async (noteId, isArchived) => {
    try {
      // 1. make patch request api:
      await axiosPrivateApi.patch(`/api/archive/${auth.userId}/${noteId}`, {
        is_archived: isArchived,
      });
      // 2. update states:
      if (isArchived) {
        let targetNote = allNotes.find((n) => n._id === noteId);
        setAllNotes((prev) => prev.filter((n) => n._id !== noteId));
        setArchiveNotes((prev) => [
          ...prev,
          { ...targetNote, is_archived: true },
        ]);
      } else {
        let targetNote = archiveNotes.find((n) => n._id === noteId);
        setArchiveNotes((prev) => prev.filter((n) => n._id !== noteId));
        setAllNotes((prev) => [...prev, { ...targetNote, is_archived: false }]);
      }
    } catch (err) {
      console.log(err);
      !err?.response
        ? setErrMsg({ msg: "server not response" })
        : setErrMsg({
            msg: `faild to ${isArchived ? "archive" : "un arvhive"} note!`,
            status: err.response.status,
          });
    }
  };
  // delete note request api:
  const unArchiveAllApi = async () => {
    try {
      // 1. make patch request api:
      await axiosPrivateApi.patch(`/api/archive/${auth.userId}`);
      // 2. update states:
      setArchiveNotes([]);
      setAllNotes((prev) => [...prev, ...archiveNotes]);
    } catch (err) {
      console.log(err);
      !err?.response
        ? setErrMsg({ msg: "server not response" })
        : setErrMsg({
            msg: `faild to unarchive all notes!`,
            status: err.response.status,
          });
    }
  };
  // delete all notes archive request api:
  const deleteArchiveNotesApi = async () => {
    try {
      setIsLoading(true);
      // 1. make delete request api:
      await axiosPrivateApi.delete(`/api/archive/${auth.userId}`);
      setArchiveNotes([]);
    } catch (err) {
      console.log(err);
      !err?.response
        ? setErrMsg({ msg: "server not response" })
        : setErrMsg({
            msg: "faild to delete all archive!",
            status: err.response.status,
          });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <NotesContext.Provider
      value={{
        allNotes,
        archiveNotes,
        allTags,
        isLoading,
        fetchDataErr,
        noteView,
        handleNoteView,
        handleNote,
        addNewTag,
        selectTag,
        tagInputErr,
        setTagInputErr,
        removeTag,
        note,
        inputErr,
        setInputErr,
        isPending,
        errMsg,
        saveNoteApi,
        archiveNoteApi,
        unArchiveAllApi,
        deleteNoteApi,
        deleteAllNotesApi,
        deleteArchiveNotesApi,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export default NotesContext;
