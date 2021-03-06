defmodule ChinguCentral.Forums.PostResolver do
  alias ChinguCentral.Repo
  alias ChinguCentral.Forums.Post
  
  def all(_args, _info) do
    {:ok, Repo.all(Post)}
  end
  
  def find(%{id: id}, _info) do
    case Repo.get(Post, id) do
      nil -> {:error, "Post with ID #{id} not found"}
      post -> {:ok, post}
    end
  end
end