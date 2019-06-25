package app.domain;

public class Article {


    private String id;
    private String author;
    private String title;

    public Article() {
    }

    public Article(String author, String title) {
        this.author = author;
        this.title = title;
    }

    public Article(String id, String author, String title) {
        this.id = id;
        this.author = author;
        this.title = title;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return ("[" + this.author + " " + this.title + "]");
    }
}
